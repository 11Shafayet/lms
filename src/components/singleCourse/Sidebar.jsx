/* eslint-disable react/prop-types */
import { MdOutlineDevicesOther, MdOutlinePayment } from 'react-icons/md';
import { CiVideoOn } from 'react-icons/ci';
import { IoDownloadOutline, IoKeyOutline } from 'react-icons/io5';
import { BsLightningCharge } from 'react-icons/bs';
import { PiCertificate } from 'react-icons/pi';
import { BiDonateHeart } from 'react-icons/bi';

const courseContents = [
  {
    icon: <CiVideoOn />,
    text: '11 hours on-demand video',
  },
  {
    icon: <IoDownloadOutline />,
    text: '69 downloadable resources',
  },
  {
    icon: <IoKeyOutline />,
    text: 'Full lifetime access',
  },
  {
    icon: <MdOutlineDevicesOther />,
    text: 'Access on mobile and TV',
  },
  {
    icon: <BsLightningCharge />,
    text: 'Assignments',
  },
  {
    icon: <PiCertificate />,
    text: 'Certificate of Completion',
  },
];

const courseDetails = [
  {
    text: 'Lectures',
    value: '6',
  },
  {
    text: 'Quizzes',
    value: '1',
  },
  {
    text: 'Duration',
    value: '3 hours',
  },
  {
    text: 'Skill level',
    value: 'All Level',
  },
  {
    text: 'Language',
    value: 'English',
  },
  {
    text: 'Assessments',
    value: 'Yes',
  },
];

const Sidebar = ({ price }) => {
  return (
    <>
      <div className="p-6 lg:px-8 border-2 border-primary border-opacity-50 rounded-xl">
        <div className="flex items-center justify-center gap-x-2">
          <MdOutlinePayment size={22} />
          <h3 className="font-black text-4xl">${price}</h3>
        </div>

        <ul className="mt-4 flex flex-col gap-y-4">
          {courseContents.map((item, i) => (
            <li
              className="flex items-center gap-x-2 text-lg opacity-60"
              key={i}
            >
              {item.icon} {item.text}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 lg:px-8 border-2 border-primary border-opacity-50 rounded-xl mt-4">
        <div className="flex items-center justify-start gap-x-2">
          <h3 className="font-black text-2xl">Course Features</h3>
        </div>

        <ul className="mt-4 flex flex-col gap-y-4">
          {courseDetails.map((item, i) => (
            <>
              <li
                className="flex justify-between items-center gap-x-2 text-lg opacity-60"
                key={i}
              >
                <h4>{item.text}:</h4>
                <p>{item.value}</p>
              </li>
              <hr />
            </>
          ))}
        </ul>
      </div>

      <div className="p-6 lg:px-8 border-2 border-primary border-opacity-50 rounded-xl mt-4">
        <div className="flex  items-center justify-start gap-x-2">
          <BiDonateHeart className="text-primary" size={50} />
          <h3 className="font-black text-2xl">Not Sure?</h3>
        </div>
        <p className="text-lg opacity-75 mt-5">
          Every course comes with a 30-day money-back guarantee
        </p>
      </div>
    </>
  );
};

export default Sidebar;
