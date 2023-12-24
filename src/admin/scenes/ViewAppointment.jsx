import React, { useEffect, useState } from "react";
import Breadcrumb from "../../global-components/Breadcrumb";
import axios from "axios";
import ContentTable from "../Components/ContentTable";
import { setItems, isLoading } from "../../redux/slice/appointmentSlice";
import { useDispatch, useSelector } from "react-redux";

const ViewAppointment = () => {
  const dispatch = useDispatch();
  const responseValue = useSelector((state) => state.appointmentList.items);

  const fetchData = async () => {
    try {
      dispatch(isLoading(true));
      const response = await axios.get("/api/appointments.json"); // Use axios consistently

      dispatch(setItems(response.data?.appointments));
    } catch (error) {
      // Handle error
      console.error("Error fetching API data:", error);
    } finally {
      dispatch(isLoading(false));
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // if (isLoading) {
  //   return <p className="mt-[80px]">Loading...</p>;
  // }

  return (
    <div className="">
      <Breadcrumb />
      <ContentTable responseValue={responseValue} />
    </div>
  );
};

export default ViewAppointment;
