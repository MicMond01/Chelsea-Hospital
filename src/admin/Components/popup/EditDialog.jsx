import { Button, Modal } from "flowbite-react";
import Face6Icon from "@mui/icons-material/Face6";
import CustomTextInput from "../Models/CustomTextInput";
import { Avatar, Typography } from "@mui/material";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import RadioButton from "../Models/RadioButton";
import EventIcon from "@mui/icons-material/Event";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PhoneEnabledIcon from '@mui/icons-material/PhoneEnabled';

const EditDialog = ({ openEditModal, setOpenEditModal, editingItem }) => {
  // const emailInputRef = useRef(null);

  return (
    <>
      <Button onClick={() => setOpenEditModal(true)}>Toggle modal</Button>
      <Modal
        show={openEditModal}
        size="2xl"
        popup
        onClose={() => setOpenEditModal(false)}
      >
        <div className="mx-6 mt-4">
          <Modal.Header>
            <div className="flex gap-3 items-center">
              <Avatar src={editingItem.url} alt={editingItem.patient_name} />
              <Typography variant="h6">{editingItem.patient_name}</Typography>
            </div>
          </Modal.Header>
        </div>

        <Modal.Body>
          <div className="space-y-6 ">
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

            <div>
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

              <CustomTextInput
                inputLabel={"Doctor Name"}
                inputIcon={WatchLaterIcon}
                inputValue={editingItem.time_from}
              />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditDialog;
