import React, { useEffect, useState } from "react";
import Breadcrumb from "../../global-components/Breadcrumb";
import axios from "axios";
import ContentTable from "../Components/ContentTable";

const ViewAppointment = () => {
  const [responseValue, setResponseValue] = useState(null);
  const [aviImage, setAviImage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
  const feteImage = async () => {
    try {
      const response = await axios.get("/api/avater.json");
      setAviImage(response?.data.images);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    feteImage();
  }, []);

  if (isLoading) {
    return <p className="mt-[80px]">Loading...</p>;
  }

  return (
    <div className="">
      <Breadcrumb />
      <ContentTable responseValue={responseValue} />

      {aviImage.map((item, index) => {
        return <img src={item.url} alt={item.title} key={index} />;
        // console.log(item.title);
      })}
    </div>
  );
};

export default ViewAppointment;
