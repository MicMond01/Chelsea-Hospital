import React, { useEffect, useState } from "react";
import Breadcrumb from "../../global-components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { isLoading, setItems } from "../../redux/slice/doctorSlice";
import { Button, CircularProgress } from "@mui/material";
import DoctorTable from "../Components/tables/DoctorTable";
import axios from "axios";
import DoctorGrid from "../Components/tables/DoctorGrid";

const Doctors = () => {
  const [listView, setListView] = useState(true);
  const [itemToDelete, setItemToDelete] = React.useState(null);
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.doctorList.loading);
  const doctorResponseValue = useSelector((state) => state.doctorList.items);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(isLoading(true));
        const response = await axios.get("/api/doctors.json");

        dispatch(setItems(response.data?.doctors));
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
    <div>
      <Breadcrumb />

      <div className="flex gap-4 my-8">
        <button
          className={`${listView ? "active-navButton" : "nav-button "}`}
          onClick={() => setListView(true)}
        >
          List View
        </button>
        <button
          className={`${!listView ? "active-navButton" : "nav-button "}`}
          onClick={() => setListView(false)}
        >
          Grid View
        </button>
      </div>

      {loading ? (
        <p className="mt-[80px]">
          {" "}
          <CircularProgress />.
        </p>
      ) : listView ? (
        <DoctorTable responseValue={doctorResponseValue} />
      ) : (
        <DoctorGrid responseValue={doctorResponseValue} />
      )}
    </div>
  );
};

export default Doctors;
