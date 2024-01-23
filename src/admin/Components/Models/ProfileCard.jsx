import React from "react";

import { Card, Dropdown } from "flowbite-react";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import { useNavigate } from "react-router-dom";
// import Image from "next/image";

const ProfileCard = ({
  image,
  name,
  email,
  specialization,
  mobile,
  id,
  idToDeleteTracter,
  editAppointmentRecord,
  dispatchCardId,
}) => {
  return (
    <Card className="">
      <div className="flex justify-end px-4 pt-4">
        <Dropdown inline label="">
          <Dropdown.Item>
            <div
              onClick={editAppointmentRecord}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Edit
            </div>
          </Dropdown.Item>
          <Dropdown.Item>
            <div
              onClick={idToDeleteTracter}
              className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Delete
            </div>
          </Dropdown.Item>
        </Dropdown>
      </div>
      <div className="flex flex-col items-center pb-10">
        <img
          alt={name}
          height="96"
          src={image}
          width="96"
          className="mb-3 rounded-full shadow-lg doctor-pic"
        />
        <h5 className=" text-xl font-bold text-gray-900 dark:text-white mb-4">
          {name}
        </h5>
        <span className="text-sm text-gray-400 mb-4">{specialization}</span>
        <span className="text-sm text-gray-500 mb-4">{email}</span>
        <span className="text-sm ">
          <LocalPhoneIcon />
          <a href="#/" className="btn-a">
            {mobile}
          </a>
        </span>
        <div
          className="mt-2 flex space-x-3 lg:mt-4 items-center"
          onClick={() => dispatchCardId()}
        >
          <a
            href="#/"
            className="inline-flex items-center rounded-3xl border deepPink-bgcolor  text-center text-sm font-medium text-gray-900  focus:outline-none focus:ring-4 btn-sm "
          >
            Read More
          </a>
        </div>
      </div>
    </Card>
  );
};

export default ProfileCard;
