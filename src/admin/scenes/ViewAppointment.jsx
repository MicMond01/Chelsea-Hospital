import React from "react";
import Breadcrumb from "../../global-components/Breadcrumb";
import { useSelector } from "react-redux";

const ViewAppointment = () => {
  const clickValue = useSelector((state) => state.button.value);

  return (
    <div className="">
      <Breadcrumb />
      <div>{clickValue}</div>
    </div>
  );
};

export default ViewAppointment;
