import React from "react";
import ProfileCard from "./ProfileCard";
import AboutMeCard from "./AboutMeCard";
import AboutActivity from "./AboutActivity";
import AddressCard from "./AddressCard";

const ProfileComp = ({ selectedItem }) => {
  return (
    <div className="md:flex block gap-4">
      <div className="profile-sidebar md:w-[350px] w-full">
        <ProfileCard
          name={selectedItem.name}
          image={selectedItem.url}
          specialization={selectedItem.specialization}
        />
        <AboutMeCard
          name={selectedItem.name}
          specialization={selectedItem.specialization}
        />
        <AddressCard />
      </div>
      <AboutActivity />
    </div>
  );
};

export default ProfileComp;
