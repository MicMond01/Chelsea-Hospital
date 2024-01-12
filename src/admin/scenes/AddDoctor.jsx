import React from "react";
import Breadcrumb from "../../global-components/Breadcrumb";
import DoctorForm from "../Components/form/DoctorForm";

const AddDoctor = () => {
  return (
    <div>
      <Breadcrumb />

      <div className="card">
        <DoctorForm />
      </div>
    </div>
  );
};

export default AddDoctor;
