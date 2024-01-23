import React from "react";
import ProfileCard from "../Models/ProfileCard";
import { selectedDoctorId, setItems } from "../../../redux/slice/doctorSlice";
import { useDispatch, useSelector } from "react-redux";
import EditDoctorDialog from "../popup/EditDoctorDialog";
import DeleteDialog from "../popup/DeleteDialog";
import { useNavigate } from "react-router-dom";

const DoctorGrid = ({ responseValue }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [editingItem, setEditingItem] = React.useState(null);
  const [openModal, setOpenModal] = React.useState(false);
  const [itemToDelete, setItemToDelete] = React.useState(null);

  const idToDeleteTracter = (id) => {
    setItemToDelete(id);
    setOpenModal(true);
  };

  const deleteConfirmation = () => {
    const updatedItems = responseValue.filter(
      (item) => item.id !== itemToDelete
    );
    dispatch(setItems(updatedItems));
    setOpenModal(false);
    // console.log(itemToDelete);
  };

  const editAppointmentRecord = (id) => {
    const selectedItem = responseValue.find((item) => item.id === id);
    setEditingItem(selectedItem);
    dispatch(selectedDoctorId(itemToDelete));

    setOpenEditModal(true);
  };

  const dispatchCardId = (id) => {
    dispatch(selectedDoctorId(id));
    navigate("/admin/doctors/profile/Doctor-Profile");
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {responseValue.map((item, index) => {
        return (
          <ProfileCard
            key={index}
            image={item.url}
            name={item.name}
            email={item.email}
            specialization={item.specialization}
            mobile={item.mobile}
            id={item.id}
            dispatchCardId={() => dispatchCardId(item.id)}
            idToDeleteTracter={() => idToDeleteTracter(item.id)}
            editAppointmentRecord={() => editAppointmentRecord(item.id)}
          />
        );
      })}
      {openEditModal && (
        <EditDoctorDialog
          openEditModal={openEditModal}
          setOpenEditModal={setOpenEditModal}
          editingItem={editingItem}
        />
      )}
      {openModal && (
        <DeleteDialog
          openModal={openModal}
          setOpenModal={setOpenModal}
          deleteConfirmation={deleteConfirmation}
        />
      )}
    </div>
  );
};

export default DoctorGrid;
