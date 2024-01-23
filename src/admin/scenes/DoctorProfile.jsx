import React, { useState } from "react";
import Breadcrumb from "../../global-components/Breadcrumb";
import ProfileComp from "../Components/doctor profile/ProfileComp";
import { useSelector } from "react-redux";

const DoctorProfile = () => {
  const doctorID = useSelector((state) => state.doctorList.selectedDoctorId);
  const doctorInfo = useSelector((state) => state.doctorList.items);
  console.log(doctorInfo);
  console.log(doctorID);

  const selectedItem = doctorInfo.find((item) => item.id === doctorID);

  return (
    <div>
      <div className="">
        <Breadcrumb />
      </div>
      <div className="">
        <ProfileComp selectedItem={selectedItem} />
      </div>
    </div>
  );
};

export default DoctorProfile;
