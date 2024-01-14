import React from "react";
import Breadcrumb from "../../global-components/Breadcrumb";
import ProfileComp from "../Components/doctor profile/ProfileComp";

const DoctorProfile = () => {
  return (
    <div>
      <div className="">
        <Breadcrumb />
      </div>
      <div className="">
        <ProfileComp />
      </div>
    </div>
  );
};

export default DoctorProfile;
