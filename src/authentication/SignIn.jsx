import React from "react";
import hospital from "../assets/images/hospital-reception-scene.jpg";
import logo from "../assets/images/hospital-logo.png";

const SignIn = () => {
  return (
    <div className="h-screen w-screen flex justify-center items-center m-6">
      <div className="hidden sm:grid w-1/2 h-full  items-center">
        <div className="flex items-center ">
          <img className="w-20 " src={logo} alt="logo" />
          <h1 className=" ml-6 font-extrabold text-6xl text-red-600">
            Red Rose Hospital
          </h1>
        </div>
        <img className=" " src={hospital} alt="logo" />
      </div>
      <div className=" sm:w-1/2 w-full "></div>
    </div>
  );
};

export default SignIn;
