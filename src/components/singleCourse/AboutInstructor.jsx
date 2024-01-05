/* eslint-disable react/prop-types */

import { FaUser } from 'react-icons/fa';
import { CiVideoOn } from 'react-icons/ci';

const AboutInstructor = ({ instructor }) => {
  const { insImg, name, designation } = instructor;
  return (
    <div className="my-6 md:my-8">
      <div className="border-2 border-opacity-55 rounded-md p-4 md:p-12">
        <h3 className="font-black text-2xl">About The Instructor</h3>
        <div className="flex items-start gap-x-4 mt-4">
          <img src={insImg} alt="" className="rounded-full" />

          <div>
            <div className="flex gap-x-4 mb-2">
              <div className="flex items-center gap-x-2 opacity-50 text-sm">
                <FaUser /> 141,745 Students
              </div>
              <div className="flex items-center gap-x-2 opacity-50 text-sm">
                <CiVideoOn /> 5 Courses
              </div>
            </div>

            <h4 className="font-bold text-2xl">{name}</h4>
            <p>{designation}</p>
            <p className="opacity-60 mt-2">
              UI/UX Designer, with 7+ Years Experience. Guarantee of High
              Quality Work. <br />
              <br /> Skills: Web Design, UI Design, UX/UI Design, Mobile Design,
              User Interface Design, Sketch, Photoshop, GUI, Html, Css, Grid
              Systems, Typography, Minimal, Template, English, Bootstrap,
              Responsive Web Design, Pixel Perfect, Graphic Design, Corporate,
              Creative, Flat, Luxury and much more.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutInstructor;
