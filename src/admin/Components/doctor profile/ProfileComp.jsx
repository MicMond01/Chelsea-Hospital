import React from "react";
import ProfileCard from "./ProfileCard";
import AboutMeCard from "./AboutMeCard";
import AboutActivity from "./AboutActivity";
import AddressCard from "./AddressCard";

const ProfileComp = () => {
  return (
    <div className="md:flex grid">
      <div className="profile-sidebar">
        <ProfileCard />
        <AboutMeCard />
        <AddressCard />
      </div>
      <AboutActivity />
    </div>
  );
};

export default ProfileComp;
