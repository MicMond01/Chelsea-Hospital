import React from "react";

const AboutMeCard = ({ name, specialization }) => {
  return (
    <div className="card">
      <div className="card-head">
        <header>About Me</header>
      </div>

      <div className="card-body">
        <div className="text-left mt-3 mb-6">
          {`
          Hello I am ${name !== null ? name : "Okudero Michael"} a ${
            specialization ? specialization : " Gynaecologist"
          } in Chelsea Hospital Lagos. I
          love to work with all my hospital staff and seniour doctors.
        `}
        </div>

        <ul className="flex flex-col pl-0 mb-0 rounded text-sm font-normal">
          <li className="relative py-[0.5rem] px-[0] text-[#212529] bg-white border-y border-[rgba(0,0,0,.125)]">
            <b>Gender</b>
            <a className="float-right shadow-none text-[#337ab7] ">Female</a>
          </li>
          <li className="relative py-[0.5rem] px-[0] text-[#212529] bg-white border-y border-[rgba(0,0,0,.125)]">
            <b>Operation Done</b>
            <a className="float-right shadow-none text-[#337ab7] ">30+</a>
          </li>
          <li className="relative py-[0.5rem] px-[0] text-[#212529] bg-white border-y border-[rgba(0,0,0,.125)]">
            <b>Degree</b>
            <a className="float-right shadow-none text-[#337ab7] ">MBBS, MD</a>
          </li>
          <li className="relative py-[0.5rem] px-[0] text-[#212529] bg-white border-y border-[rgba(0,0,0,.125)]">
            <b>Designation</b>
            <a className="float-right shadow-none text-[#337ab7] ">
              Gynaecologist
            </a>
          </li>
        </ul>
      </div>

      <div className="sm:flex justify-center  gap-5  pb-5 border-b-2 border-[#f0f4f7] mt-3 mb-4  list-separated ">
        <div className="">
          <div className="uppercase text-[#7f90a4] text-2xl text-center">
            37
          </div>
          <div className="uppercase text-[#5b9bd1] text-xs font-extrabold text-center">
            Projects
          </div>
        </div>
        <div className="">
          <div className="uppercase text-[#7f90a4] text-2xl text-center">
            51
          </div>
          <div className="uppercase text-[#5b9bd1] text-xs font-extrabold text-center">
            Tasks
          </div>
        </div>
        <div className="">
          <div className="uppercase text-[#7f90a4] text-2xl text-center">
            61
          </div>
          <div className="uppercase text-[#5b9bd1] text-xs font-extrabold text-center">
            Uploads
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMeCard;
