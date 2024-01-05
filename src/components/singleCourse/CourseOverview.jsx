import { FaCheck } from 'react-icons/fa';
import { GoDotFill } from 'react-icons/go';

/* eslint-disable react/prop-types */
const CourseOverview = ({ data }) => {
  const { description, whatWillLearn, requirements } = data;
  return (
    <div className="my-6 md:my-8">
      <div className="border-2 border-opacity-55 rounded-md p-4 md:p-12">
        <h3 className="font-black text-2xl">Course Overview</h3>
        <div>
          <h3 className="font-medium text-lg mt-6">Course Description</h3>
          <p className="opacity-75 !leading-normal tracking-wide mt-2">
            {description}
          </p>
        </div>

        <div>
          <h3 className="font-medium text-lg mt-6">{`What You'll Learn`}</h3>
          <ul className="opacity-50 grid grid-cols-1 sm:grid-cols-2 gap-4 justify-between items-start mt-2">
            {whatWillLearn.map((item, i) => (
              <li className="flex items-start gap-x-2 tracking-wider" key={i}>
                <FaCheck className="mt-1" /> {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-medium text-lg mt-6">{`Requirements`}</h3>
          <ul className="opacity-50 mt-2 flex flex-col gap-y-2">
            {requirements.map((item, i) => (
              <li
                className="list-disc flex items-start gap-x-2 tracking-wider"
                key={i}
              >
                <GoDotFill className="mt-1" /> {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseOverview;
