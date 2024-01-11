import Button from "@mui/material/Button";
import Face6Icon from "@mui/icons-material/Face6";
import CustomTextInput from "../Models/CustomTextInput";
import {
  Avatar,
  Dialog,
  DialogContent,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import RadioButton from "../Models/RadioButton";
import EventIcon from "@mui/icons-material/Event";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import CustomSelect from "../Models/CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import MultiLineInput from "../Models/MultiLineInput";
import React, { useState } from "react";
import { setItems } from "../../../redux/slice/appointmentSlice";

const EditDialog = ({ openEditModal, setOpenEditModal, editingItem }) => {
  const [localEditingItem, setLocalEditingItem] = React.useState(() =>
    JSON.parse(JSON.stringify(editingItem))
  );
  const dispatch = useDispatch();
  const responseValue = useSelector((state) => state.appointmentList.items);

  // Extract unique consulting_doctor values
  const consultingDoctors = Array.from(
    new Set(responseValue.map((item) => item.consulting_doctor))
  );

  const handleChangeValue = (name, value) => {
    setLocalEditingItem((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [selectedDoctor, setSelectedDoctor] = useState("");

  const handleDoctorChange = (event) => {
    setSelectedDoctor(event.target.value);
    handleChangeValue("consulting_doctor", event.target.value);
  };

  const handleSave = () => {
    const updatedItems = responseValue.map((item) =>
      item.id === localEditingItem.id ? localEditingItem : item
    );

    dispatch(setItems(updatedItems));

    console.log(updatedItems);
    // Reset the editing state
    setOpenEditModal(false);
  };

  return (
    <React.Fragment>
      <Button onClick={() => setOpenEditModal(true)}>Toggle modal</Button>
      <Dialog
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        aria-labelledby="responsive-dialog-title"
        maxWidth="lg"
      >
        <div className="mx-6 mt-4">
          <div className="flex gap-3 items-center">
            <Avatar src={editingItem.url} alt={editingItem.patient_name} />
            <Typography variant="h6">{editingItem.patient_name}</Typography>
          </div>
        </div>
        <DialogContent>
          <div className="sm:flex gap-4 block">
            <CustomTextInput
              inputLabel={"Name"}
              inputIcon={Face6Icon}
              inputValue={localEditingItem.patient_name}
              name="patient_name"
              handleChangeValue={handleChangeValue}
            />
            <CustomTextInput
              inputLabel={"Email"}
              inputIcon={MarkunreadIcon}
              inputValue={localEditingItem.email}
              name="email"
              handleChangeValue={handleChangeValue}
            />
          </div>

          <div className="flex ml-5">
            <RadioButton
              radioValue={localEditingItem.gender}
              name="gender"
              handleChangeValue={handleChangeValue}
            />
          </div>

          <div className="sm:flex gap-4 block">
            <CustomTextInput
              inputLabel={"Choose a Date"}
              inputIcon={EventIcon}
              inputValue={localEditingItem.date}
              name="date"
              handleChangeValue={handleChangeValue}
            />
            <CustomTextInput
              inputLabel={"Time"}
              inputIcon={WatchLaterIcon}
              inputValue={localEditingItem.time_from}
              name="time_from"
              handleChangeValue={handleChangeValue}
            />
          </div>

          <div className="sm:flex gap-4 block">
            <CustomTextInput
              inputLabel={"Mobile"}
              inputIcon={PhoneEnabledIcon}
              inputValue={localEditingItem.mobile}
              name="mobile"
              handleChangeValue={handleChangeValue}
            />

            <CustomSelect
              inputLabel={"Doctor"}
              inputValue={consultingDoctors}
              name="consulting_doctor"
              selectedValue={selectedDoctor}
              handleChangeValue={handleDoctorChange}
            />
          </div>

          <div className="sm:flex gap-4 block">
            <MultiLineInput
              inputLabel={"Injury/Condition"}
              inputValue={localEditingItem.injury_condition}
              name="injury_condition"
              handleChangeValue={handleChangeValue}
            />
          </div>

          <Stack spacing={2} direction="row" sx={{ ml: "0.8rem", mt: "2rem" }}>
            <Button variant="contained" onClick={handleSave}>
              Save
            </Button>
            <Button
              variant="contained"
              color="error"
              onClick={() => setOpenEditModal(false)}
            >
              Cancle
            </Button>
          </Stack>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default EditDialog;
