import { FaStarHalfAlt } from 'react-icons/fa';
import { FaComment, FaStar, FaUser } from 'react-icons/fa6';
import CourseOverview from './CourseOverview';
import CourseContent from './CourseContent';
import AboutInstructor from './AboutInstructor';
import RelatedCourses from './RelatedCourses';

/* eslint-disable react/prop-types */
const SingleCourse = ({ data }) => {
  const { instructor, date, title, rating, enrolled, category, topics, id } =
    data;

  return (
    <div className="p-4 lg:p-12">
      <div className="">
        <div className="flex items-center gap-x-2">
          <img
            src={instructor.insImg}
            alt="instructor"
            className="rounded-full w-11 h-11"
          />
          <h4 className="font-bold text-xl">{instructor.name}</h4>
          <p className="opacity-75">{date}</p>
        </div>
        <h4 className="font-secondary text-3xl font-bold">{title}</h4>
        <div className="flex items-center gap-x-2 my-3">
          <h4 className="bg-primary text-white py-1.5 px-4 rounded-md text-sm ">
            Best Seller
          </h4>
          <div className="flex items-center gap-x-0.5">
            <FaStar size={11} />
            <FaStar size={11} />
            <FaStar size={11} />
            <FaStar size={11} />
            <FaStarHalfAlt size={11} />
            <p className="text-[12px] opacity-75">({rating})</p>
          </div>
        </div>
        {/* students and comments */}
        <div className="border-t pt-3 mt-3 flex items-center gap-x-4">
          <div className="flex items-center gap-x-1 opacity-60">
            <FaUser />
            <p>{enrolled} student enrolled</p>
          </div>
          <div className="flex items-center gap-x-1 opacity-60">
            <FaComment />
            <p>2 comments</p>
          </div>
        </div>

        {/* video */}
        <div className="my-6">
          <iframe
            src="https://www.youtube.com/embed/q-hRF2NJccc"
            title="Iframe Example"
            className="w-full h-[500px]"
          ></iframe>
        </div>

        <CourseOverview data={data} />
        <CourseContent topics={topics} date={date} category={category} />
        <AboutInstructor instructor={instructor} />

        <RelatedCourses category={category} id={id} />
      </div>
    </div>
  );
};

export default SingleCourse;
