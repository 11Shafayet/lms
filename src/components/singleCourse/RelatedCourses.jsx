/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { allCourses } from '../../data';
import { FaStar } from 'react-icons/fa6';
import { FaStarHalfAlt } from 'react-icons/fa';

const RelatedCourses = ({ category, id }) => {
  const categoryFilter = (item) => {
    if (category === item.category && id !== item.id) {
      return item;
    } else return;
  };

  return (
    <div className="border-t-2 pt-6 mt-12">
      <h3 className="font-black text-2xl mb-6">Related Courses</h3>
      <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-5">
        {allCourses
          .filter(categoryFilter)
          .slice(0, 2)
          .map((course, i) => {
            const { banner, title, topSeller, rating, date, price, id } =
              course;
            return (
              <Link
                to={`/courses/${id}`}
                className="border rounded-md group overflow-hidden cursor-pointer group"
                key={i}
              >
                <div className="relative z-10">
                  {topSeller && (
                    <h4 className="absolute top-3 left-3 text-primary font-bold opacity-0 group-hover:opacity-100 duration-500 z-20">
                      Top Seller
                    </h4>
                  )}
                  <div className="bg-black w-full h-full bg-opacity-40 text-white flex justify-center items-center absolute top-1/2 left-1/2 inset-0 -translate-x-1/2 -translate-y-1/2 z-10 group-hover:opacity-100 opacity-0 duration-500">
                    Preview Course
                  </div>
                  <img
                    src={banner}
                    alt={title}
                    className="w-full h-[220px] object-cover rounded-md"
                  />
                  <div className="absolute -bottom-9 right-3 bg-primary w-[70px] h-[70px] rounded-full flex justify-center items-center text-white font-bold text-lg z-30">
                    ${price}
                  </div>
                </div>
                <div className="p-3 pt-5">
                  <p className="text-sm opacity-75 tracking-wide">{date}</p>
                  <h3 className="font-secondary text-2xl font-bold leading-tight line-clamp-2 overflow-x-hidden text-ellipsis group-hover:text-primary duration-300">
                    {title}
                  </h3>
                  <div className="flex items-center gap-x-0.5 mt-3">
                    <FaStar size={11} />
                    <FaStar size={11} />
                    <FaStar size={11} />
                    <FaStar size={11} />
                    <FaStarHalfAlt size={11} />
                    <p className="text-[12px] opacity-75">({rating})</p>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default RelatedCourses;
