import Button from "@mui/material/Button";
import Face6Icon from "@mui/icons-material/Face6";
import CustomTextInput from "../Models/CustomTextInput";
import {
  Avatar,
  Dialog,
  DialogContent,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import RadioButton from "../Models/RadioButton";
import EventIcon from "@mui/icons-material/Event";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PhoneEnabledIcon from "@mui/icons-material/PhoneEnabled";
import CustomSelect from "../Models/CustomSelect";
import { useSelector } from "react-redux";
import MultiLineInput from "../Models/MultiLineInput";
import React from "react";

const EditDialog = ({ openEditModal, setOpenEditModal, editingItem }) => {
  const responseValue = useSelector((state) => state.appointmentList.items);

  // Extract unique consulting_doctor values
  const consultingDoctors = Array.from(
    new Set(responseValue.map((item) => item.consulting_doctor))
  );

  return (
    <React.Fragment>
      <Button onClick={() => setOpenEditModal(true)}>Toggle modal</Button>
      <Dialog
        sx={{ maxWidth: 220 }}
        open={openEditModal}
        onClose={() => setOpenEditModal(false)}
        aria-labelledby="responsive-dialog-title"
      >
        <div className="mx-6 mt-4">
          <div className="flex gap-3 items-center">
            <Avatar src={editingItem.url} alt={editingItem.patient_name} />
            <Typography variant="h6">{editingItem.patient_name}</Typography>
          </div>
        </div>

        <div className=" my-6">
          <DialogContent>
            <div className="flex gap-4">
              <CustomTextInput
                inputLabel={"Name"}
                inputIcon={Face6Icon}
                inputValue={editingItem.patient_name}
              />
              <CustomTextInput
                inputLabel={"Email"}
                inputIcon={MarkunreadIcon}
                inputValue={editingItem.email}
              />
            </div>

            <div className="flex ml-5">
              <RadioButton radioValue={editingItem.gender} />
            </div>

            <div className="flex gap-4">
              <CustomTextInput
                inputLabel={"Choose a Date"}
                inputIcon={EventIcon}
                inputValue={editingItem.date}
              />
              <CustomTextInput
                inputLabel={"Time"}
                inputIcon={WatchLaterIcon}
                inputValue={editingItem.time_from}
              />
            </div>

            <div className="flex gap-4">
              <CustomTextInput
                inputLabel={"Mobile"}
                inputIcon={PhoneEnabledIcon}
                inputValue={editingItem.mobile}
              />

              <CustomSelect
                inputLabel={"Doctor"}
                doctor={editingItem.consulting_doctor}
                inputValue={consultingDoctors}
              />
            </div>

            <div className="flex gap-4">
              <MultiLineInput
                inputLabel={"Injury/Condition"}
                inputValue={editingItem.injury_condition}
              />
            </div>
          </DialogContent>
        </div>
      </Dialog>
    </React.Fragment>
  );
};

export default EditDialog;
