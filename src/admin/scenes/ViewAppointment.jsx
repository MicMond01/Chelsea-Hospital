import React, { useEffect } from "react";
import Breadcrumb from "../../global-components/Breadcrumb";
import axios from "axios";
import ContentTable from "../Components/ContentTable";
import { setItems, isLoading } from "../../redux/slice/appointmentSlice";
import { useDispatch, useSelector } from "react-redux";
import { CircularProgress } from "@mui/material";

const ViewAppointment = () => {
  const dispatch = useDispatch();
  const responseValue = useSelector((state) => state.appointmentList.items);
  const loading = useSelector((state) => state.appointmentList.loading);

  useEffect(() => {
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

    fetchData();
  }, [dispatch]);

  return (
    <div className="">
      <Breadcrumb />{" "}
      {loading ? (
        <p className="mt-[80px]">
          {" "}
          <CircularProgress />.
        </p>
      ) : (
        <ContentTable responseValue={responseValue} />
      )}
    </div>
  );
};

export default ViewAppointment;
