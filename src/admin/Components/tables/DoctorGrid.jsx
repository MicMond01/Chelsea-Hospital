import React from "react";
import ProfileCard from "../Models/ProfileCard";
import { selectedDoctorId, setItems } from "../../../redux/slice/doctorSlice";
import { useDispatch } from "react-redux";
import EditDoctorDialog from "../popup/EditDoctorDialog";

const DoctorGrid = ({ responseValue }) => {
  const dispatch = useDispatch();
  const [openEditModal, setOpenEditModal] = React.useState(false);
  const [editingItem, setEditingItem] = React.useState(null);

  const deleteConfirmation = (id) => {
    const updatedItems = responseValue.filter((item) => item.id !== id);
    dispatch(setItems(updatedItems));
    console.log(id);
  };

  const editAppointmentRecord = (id) => {
    const selectedItem = responseValue.find((item) => item.id === id);
    setEditingItem(selectedItem);
    dispatch(selectedDoctorId(id));

    setOpenEditModal(true);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {responseValue.map((item, index) => {
        return (
          <ProfileCard
            key={index}
            image={item.url}
            name={item.name}
            email={item.email}
            specialization={item.specialization}
            mobile={item.mobile}
            deleteConfirmation={() => deleteConfirmation(item.id)}
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
    </div>
  );
};

export default DoctorGrid;
