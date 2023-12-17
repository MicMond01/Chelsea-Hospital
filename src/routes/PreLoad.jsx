import React from "react";
import { CircularProgress } from "@mui/material";

const PreLoad = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <CircularProgress disableShrink />
    </div>
  );
};

export default PreLoad;
