import React from "react";
import { Button } from "flowbite-react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { Dialog, DialogContent } from "@mui/material";

const DeleteDialog = ({ openModal, setOpenModal, deleteConfirmation }) => {
  return (
    <React.Fragment>
      {/* <Button onClick={() => setOpenModal(true)}>Toggle modal</Button> */}
      <Dialog
        open={openModal}
        onClose={() => setOpenModal(false)}
        aria-labelledby="responsive-dialog-title"
        maxWidth="md"
      >
        <DialogContent>
          <div className="text-center">
            <HiOutlineExclamationCircle className="mx-auto mb-4 h-14 w-14 text-gray-400 dark:text-gray-200" />
            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
              Are you sure you want to delete this Item?
            </h3>
            <div className="flex justify-center gap-4">
              <Button color="failure" onClick={deleteConfirmation}>
                {"Yes, I'm sure"}
              </Button>
              <Button color="gray" onClick={() => setOpenModal(false)}>
                No, cancel
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default DeleteDialog;
