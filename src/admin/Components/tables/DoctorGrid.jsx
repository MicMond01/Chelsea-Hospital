import React from "react";
import ProfileCard from "../Models/ProfileCard";
import { setItems } from "../../../redux/slice/doctorSlice";
import { useDispatch } from "react-redux";

const DoctorGrid = ({ responseValue }) => {
  const dispatch = useDispatch();

  const deleteConfirmation = (id) => {
    const updatedItems = responseValue.filter((item) => item.id !== id);
    dispatch(setItems(updatedItems));
    console.log(id);
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
          />
        );
      })}
    </div>
  );
};

export default DoctorGrid;
