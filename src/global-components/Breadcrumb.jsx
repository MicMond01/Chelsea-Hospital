import * as React from "react";
import Typography from "@mui/material/Typography";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import HomeIcon from "@mui/icons-material/Home";
import WhatshotIcon from "@mui/icons-material/Whatshot";
import GrainIcon from "@mui/icons-material/Grain";
import { useDispatch, useSelector } from "react-redux";
import { setButtonValue } from "../redux/slice/buttonSlice";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function Breadcrumb() {
    
    const handleDispatch = () => {
        const newValue = "Enter a value for the button:";
       
  };

  return (
    <div className="mt-12 md:mt-[70px] md:flex block justify-between">
      <h1 className="breadcrumb-title md:text-2xl md:mb-0 text-lg mb-5">
        Book Appointment
      </h1>

      <div role="presentation">
        <Breadcrumbs
          aria-label="breadcrumb"
          sx={{
            padding: "15px",
            borderRadius: "50px",
            background: "rgba(220, 208, 208, 0.3)",
            paddingLeft: "20px",
          }}
        >
          <Link
            onClick={handleClick}
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/"
          >
            <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            MUI
          </Link>
          <Link
            underline="hover"
            sx={{ display: "flex", alignItems: "center" }}
            color="inherit"
            href="/material-ui/getting-started/installation/"
          >
            <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Core
          </Link>
          <Typography
            sx={{ display: "flex", alignItems: "center" }}
            color="text.primary"
          >
            <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
            Breadcrumb
          </Typography>

          <button onClick={handleDispatch}>Add Async</button>
        </Breadcrumbs>
      </div>
    </div>
  );
}
