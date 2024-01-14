import React from "react";

const AboutActivity = () => {
  return (
    <div className="row">
      <div className="card">
        <div className="border-t border-[#00c0ef]"></div>

        <div className="bg-white p-5 mt-3 mb-4">
          <div className="px-5">
            <div className="row">
              <div className="md:flex-auto md:w-1/4">
                <strong>Full Name</strong>
                <br />
                <p className="text-[#919aa3] mb-3">Okudero Michael</p>
              </div>
              <div className="md:flex-auto md:w-1/4">
                <strong>Mobile</strong>
                <br />
                <p className="text-[#919aa3] mb-3">(234) 8024993946</p>
              </div>
              <div className="md:flex-auto md:w-1/4">
                <strong>Email</strong>
                <br />
                <p className="text-[#919aa3] mb-3">gbengaokudero@gmail.com</p>
              </div>
              <div className="md:flex-auto md:w-1/4">
                <strong>Location</strong>
                <br />
                <p className="text-[#919aa3] mb-3">Nigeria</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutActivity;
