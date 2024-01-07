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
import RadioButton from "../Models/RadioButton";
import EventIcon from "@mui/icons-material/Event";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import CustomSelect from "../Models/CustomSelect";
import { useDispatch, useSelector } from "react-redux";
import MultiLineInput from "../Models/MultiLineInput";
import React from "react";
import { setItems } from "../../../redux/slice/appointmentSlice";

const EditDialog = ({ openEditModal, setOpenEditModal, editingItem }) => {
  const [localEditingItem, setLocalEditingItem] = React.useState(editingItem); // Initialize local state with the editingItem

  const dispatch = useDispatch();
  const responseValue = useSelector((state) => state.appointmentList.items);

  // Extract unique consulting_doctor values
  const consultingDoctors = Array.from(
    new Set(responseValue.map((item) => item.consulting_doctor))
  );

  const handleChangeValue = (field, value) => {
    setLocalEditingItem({
      ...localEditingItem,
      [field]: value,
    });
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
              inputValue={editingItem.patient_name}
              handleChangeValue={(event) =>
                handleChangeValue("patient_name", event.target.value)
              }
            />
            <CustomTextInput
              inputLabel={"Email"}
              inputIcon={MarkunreadIcon}
              inputValue={editingItem.email}
              handleChangeValue={(event) =>
                handleChangeValue("email", event.target.value)
              }
            />
          </div>

          <div className="flex ml-5">
            <RadioButton
              radioValue={editingItem.gender}
              handleChangeValue={(event) =>
                handleChangeValue("gender", event.target.value)
              }
            />
          </div>

          <div className="sm:flex gap-4 block">
            <CustomTextInput
              inputLabel={"Choose a Date"}
              inputIcon={EventIcon}
              inputValue={editingItem.date}
              handleChangeValue={(event) =>
                handleChangeValue("date", event.target.value)
              }
            />
            <CustomTextInput
              inputLabel={"Time"}
              inputIcon={WatchLaterIcon}
              inputValue={editingItem.time_from}
              handleChangeValue={(event) =>
                handleChangeValue("time_from", event.target.value)
              }
            />
          </div>

          <div className="sm:flex gap-4 block">
            <CustomTextInput
              inputLabel={"Mobile"}
              inputIcon={PhoneEnabledIcon}
              inputValue={editingItem.mobile}
              handleChangeValue={(event) =>
                handleChangeValue("mobile", event.target.value)
              }
            />

            <CustomSelect
              inputLabel={"Doctor"}
              doctor={editingItem.consulting_doctor}
              inputValue={consultingDoctors}
              handleChangeValue={(event) =>
                handleChangeValue("consulting_doctor", event.target.value)
              }
            />
          </div>

          <div className="sm:flex gap-4 block">
            <MultiLineInput
              inputLabel={"Injury/Condition"}
              inputValue={editingItem.injury_condition}
              handleChangeValue={(event) =>
                handleChangeValue("injury_condition", event.target.value)
              }
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
