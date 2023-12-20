import React, { useEffect, useState } from "react";
import Breadcrumb from "../../global-components/Breadcrumb";
import axios from "axios";
import ContentTable from "../Components/ContentTable";
import { Avatar } from "@mui/material";

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

  const getRandomImage = (gender) => {
    const filteredImages = aviImage.filter((image) => image.gender === gender);
    const randomIndex = Math.floor(Math.random() * filteredImages.length);
    return filteredImages[randomIndex];
  };

  const randomMaleImage = getRandomImage("male");
  const randomFemaleImage = getRandomImage("female");
  

  return (
    <div className="">
      <Breadcrumb />
      <ContentTable responseValue={responseValue} />
      <Avatar src={randomMaleImage} alt="Male Avatar" />
      <Avatar src={randomFemaleImage} alt="Female Avatar" />
    </div>
  );
};

export default ViewAppointment;
