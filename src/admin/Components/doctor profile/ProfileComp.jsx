import React from "react";
import ProfileCard from "./ProfileCard";
import AboutMeCard from "./AboutMeCard";
import AboutActivity from "./AboutActivity";
import AddressCard from "./AddressCard";

const ProfileComp = () => {
  return (
    <div className="md:flex block gap-4">
      <div className="profile-sidebar md:w-[350px] w-full">
        <ProfileCard />
        <AboutMeCard />
        <AddressCard />
      </div>
      <AboutActivity />
    </div>
  );
};

export default ProfileComp;
