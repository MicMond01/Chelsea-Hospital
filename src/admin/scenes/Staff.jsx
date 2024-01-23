import { CircularProgress } from "@mui/material";
import React, { useEffect, useState } from "react";
import Breadcrumb from "../../global-components/Breadcrumb";
import { useDispatch, useSelector } from "react-redux";
import { isLoading, setStaffItem } from "../../redux/slice/staffSlice";
import axios from "axios";
import StaffTable from "../Components/tables/StaffTable";

const Staff = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.staffList.loading);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(isLoading(true));
        const response = await axios.get("/api/staff.json");
        dispatch(setStaffItem(response.data?.staff));
      } catch (erorr) {
        console.log(`"Error fetching api Data" ${erorr}`);
      } finally {
        dispatch(isLoading(false));
      }
    };

    fetchData();
  }, [dispatch]);

  return (
    <div>
      <Breadcrumb />

      {loading ? (
        <p className="mt-[80px]">
          <CircularProgress />.
        </p>
      ) : (
        <StaffTable />
      )}
    </div>
  );
};

export default Staff;
