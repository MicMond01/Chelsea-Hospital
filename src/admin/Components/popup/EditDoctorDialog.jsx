import Button from "@mui/material/Button";
import Face6Icon from "@mui/icons-material/Face6";
import CustomTextInput from "../Models/CustomTextInput";
import {
  Avatar,
  Dialog,
  DialogContent,
  Stack,
  Typography,
} from "@mui/material";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import EventIcon from "@mui/icons-material/Event";
import FlagIcon from "@mui/icons-material/Flag";
import SchoolIcon from "@mui/icons-material/School";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useDispatch, useSelector } from "react-redux";
import MultiLineInput from "../Models/MultiLineInput";
import React from "react";
import CustomDatePicker from "../Models/CustomDatePicker";
import { setItems } from "../../../redux/slice/doctorSlice";

const EditDoctorDialog = ({ openEditModal, setOpenEditModal, editingItem }) => {
  const [localEditingItem, setLocalEditingItem] = React.useState(editingItem); // Initialize local state with the editingItem
  console.log(localEditingItem);

  const dispatch = useDispatch();
  const responseValue = useSelector((state) => state.doctorList.items);

  // Extract unique consulting_doctor values
  const consultingDoctors = Array.from(
    new Set(responseValue.map((item) => item.consulting_doctor))
  );

  const handleChangeValue = (name, value) => {
    setLocalEditingItem({
      ...localEditingItem,
      [name]: value,
    });
  };

  const handleSave = () => {
    const updatedItems = responseValue.map((item) =>
      item.id === localEditingItem.id ? localEditingItem : item
    );

    dispatch(setItems(updatedItems));

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
            <Avatar src={localEditingItem.url} alt={localEditingItem.name} />
            <Typography variant="h6">{localEditingItem.name}</Typography>
          </div>
        </div>
        <DialogContent>
          <div className="sm:flex gap-4 block">
            <CustomTextInput
              inputLabel={"Name"}
              inputIcon={Face6Icon}
              inputValue={localEditingItem.name}
              handleChangeValue={handleChangeValue}
              name="name"
            />
            <CustomTextInput
              inputLabel={"Department"}
              inputIcon={BusinessCenterIcon}
              inputValue={localEditingItem.department}
              handleChangeValue={handleChangeValue}
              name="department"
            />
          </div>

          <div className="sm:flex gap-4 block">
            <CustomTextInput
              inputLabel={"Specialization"}
              inputIcon={FlagIcon}
              inputValue={localEditingItem.specialization}
              handleChangeValue={handleChangeValue}
              name="specialization"
            />
            <CustomTextInput
              inputLabel={"Degree"}
              inputIcon={SchoolIcon}
              inputValue={localEditingItem.degree}
              handleChangeValue={handleChangeValue}
              name="degree"
            />
          </div>

          <div className="sm:flex gap-4 block">
            <CustomTextInput
              inputLabel={"Mobile"}
              inputIcon={LocalPhoneIcon}
              inputValue={localEditingItem.mobile}
              handleChangeValue={handleChangeValue}
              name="mobile"
            />
            <CustomTextInput
              inputLabel={"Email"}
              inputIcon={MarkunreadIcon}
              inputValue={localEditingItem.email}
              handleChangeValue={handleChangeValue}
              name="email"
            />
          </div>

          <div className="sm:flex gap-4 block">
            <CustomDatePicker
              inputLabel={"Joining Date"}
              inputIcon={EventIcon}
              inputValue={localEditingItem.joining_date}
              handleChangeValue={handleChangeValue}
              name="joining_date"
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

export default EditDoctorDialog;
