import React from "react";
import profilePic from "../../../assets/images/avater1.jpg";
import { Button } from "@mui/material";

const ProfileCard = ({ image, name, specialization }) => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="row">
          <div className="profile-userpic flex items-centers">
            <img
              src={image ? image : profilePic}
              alt="profile"
              className="profile-userpic"
            />
          </div>
        </div>

        <div className="mt-1 text-center">
          <div className="text-xl mb-[2px] font-bold text-[#3a405b]">
            {name ? name : "Dr.Kiran Patel"}
          </div>
          <div className="text-[#777777] mb-[5px] text-xs">
            {" "}
            {specialization ? specialization : "Gynaecologist "}{" "}
          </div>
        </div>

        <ul className="flex flex-col pl-0 mb-0 rounded text-sm font-normal">
          <li className="relative py-[0.5rem] px-[0] text-[#212529] bg-white border-y border-[rgba(0,0,0,.125)]">
            <b>Followers</b>{" "}
            <a className="float-right shadow-none text-[#337ab7] ">1,200</a>
          </li>
          <li className="relative py-[0.5rem] px-[0] text-[#212529] bg-white border-y border-[rgba(0,0,0,.125)]">
            <b>Following</b>{" "}
            <a className="float-right shadow-none text-[#337ab7] ">750</a>
          </li>
          <li className="relative py-[0.5rem] px-[0] text-[#212529] bg-white border-y border-[rgba(0,0,0,.125)]">
            <b>Friends</b>{" "}
            <a className="float-right shadow-none text-[#337ab7] ">11,172</a>
          </li>
        </ul>

        <div className="text-center mt-3">
          <Button
            sx={{
              fontSize: "11px",
              padding: "6px 18px",
              mr: "5px",
              borderRadius: "25px",
              color: "#fff",
              bgcolor: "#e91e63",
            }}
          >
            Follow
          </Button>
          <Button
            sx={{
              fontSize: "11px",
              padding: "6px 18px",
              mr: "5px",
              borderRadius: "25px",
              color: "#fff",
              bgcolor: "#e7505a",
            }}
          >
            Message
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
