import React from "react";
import Breadcrumb from "../../global-components/Breadcrumb";
import BookingForm from "../Components/form/BookingForm";

const BookAppointment = () => {
  return (
    <div className="">
      <Breadcrumb />{" "}
      <div className="">
        <BookingForm />
      </div> 
    </div>
  );
};

export default BookAppointment;
