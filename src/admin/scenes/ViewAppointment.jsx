import React, { useEffect, useState } from "react";
import Breadcrumb from "../../global-components/Breadcrumb";
import axios from "axios";
import ContentTable from "../Components/ContentTable";
import { fetchApiData } from "../../redux/slice/appointmentSlice";
import { useDispatch } from "react-redux";


const ViewAppointment = () => {
  const [responseValue, setResponseValue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch()

  const appointmentData = useDispatch()

  const fetchData = async () => {
    try {
      const response = await axios.get("/api/appointments.json");
      dispatch(setSelectedItemId(response?.data.appointments);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return <p className="mt-[80px]">Loading...</p>;
  }

  return (
    <div className="">
      <Breadcrumb />
      <ContentTable responseValue={responseValue} />
    </div>
  );
};

export default ViewAppointment;
