import React, { useEffect, useState } from "react";
import Breadcrumb from "../../global-components/Breadcrumb";
import axios from "axios";
import ContentTable from "../Components/ContentTable";

const ViewAppointment = () => {
  const [responseValue, setResponseValue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/appointments.json");
        setResponseValue(response?.data.appointments);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <p className="mt-[80px]">Loading...</p>;
  }

  console.log(responseValue);
  return (
    <div className="">
      <Breadcrumb />
      <ContentTable responseValue={responseValue} />

      {/* {responseValue} */}
    </div>
  );
};

export default ViewAppointment;
