import { AccountCircle } from "@mui/icons-material";
import { Button, Checkbox, Label, Modal, TextInput } from "flowbite-react";
import { useRef } from "react";
import CustomTextInput from "../Models/CustomTextInput";
import { Avatar, Typography } from "@mui/material";

const EditDialog = ({ openEditModal, setOpenEditModal, image, name }) => {
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
            <Avatar src={image} alt={name} />
            <Typography>{name}</Typography>
          </Modal.Header>
        </div>

        <Modal.Body>
          <div className="space-y-6 mx-4">
            <div className="flex gap-4">
              <CustomTextInput />
              <CustomTextInput />
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditDialog;
