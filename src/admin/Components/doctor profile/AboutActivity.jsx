import React from "react";

const AboutActivity = () => {
  return (
    <div className="w-full">
      <div className="card">
        <div className="border-t border-[#00c0ef]"></div>

        <div className="bg-white p-10 mt-3 mb-4">
          <div className="px-5">
            <div className="md:flex block">
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

          <div className="mt-16">
            <p>
              Completed my graduation in Gynaecologist Medicine from the well
              known and renowned institution of India  SARDAR PATEL MEDICAL
              COLLEGE, BARODA in 2000-01, which was affiliated to M.S.
              University. I ranker in University exams from the same university
              from 1996-01.
              <br />
              <br />
              Worked as Professor and Head of the department ; Community
              medicine Department at Sterline Hospital, Rajkot, Gujarat from
              2003-2015
              <br />
              <br />
              And I was lucky to train in a collegial environment where we
              called most of our attendings by their first names. If only
              doctors did it that way outside the Midwest. One of my attendings
              even made the argument that it is safer for patient care because
              its easier for subordinates to raise concerns when theyre not
              verbally kowtowing to their superior. I never respected a
              white-haired surgeon any less when I addressed him by his first
              name. In fact, I saw that in non-clinical science, it is
              commonplace for the most junior researchers to call the most
              celebrated senior scientists by their first names.
              <br />
              <br />
              When I offer or recommend products, I do so because I have
              actively researched them and find they are the best in that
              category for your health. I ignore substandard products, and
              products not directly pertinent to your health, regardless of any
              potential financial upsid
            </p>
          </div>

          <div className="mt-8">
            <h4 className="font-bold">Education</h4>
            <br />
            <ul>
              <li>M.B.B.S.,Gujarat University, Ahmedabad,India.</li>
              <li>M.S.,Gujarat University, Ahmedabad, India.</li>
              <li>
                SPINAL FELLOWSHIP Dr. John Adam, Allegimeines Krakenhaus,
                Schwerin, Germany.
              </li>
              <li>Fellowship in Endoscopic Spine Surgery Phoenix, USA.</li>
              <li>D.N.B from AIIMS</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutActivity;
