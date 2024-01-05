import { useState } from 'react';
import { allCategories, allCourses } from '../../data';
import { FaStar } from 'react-icons/fa6';
import { FaStarHalfAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const TopCourses = () => {
  const [activeTab, setActiveTab] = useState('All');

  const categoryFilter = (item) => {
    if (activeTab === 'All') {
      return item;
    } else if (activeTab === item.category) {
      return item;
    } else return;
  };

  return (
    <div className="my-12 md:my-20">
      <div className="container mx-auto px-4">
        {/* heading content */}
        <div className="text-center max-w-[600px] mx-auto">
          <h4 className="text-2xl md:text-3xl lg:text-5xl font-bold font-secondary">
            Browse Our Top Courses
          </h4>
          <p className="opacity-75 tracking-wide mt-2">
            Cum doctus civibus efficiantur in imperdiet deterruisCum doctus
            civibus efficiantur in imperdiet deterruisset.
          </p>
        </div>

        <div>
          {/* tab bar */}
          <div className="flex justify-center items-center gap-x-2 flex-wrap mt-8 mb-6">
            {allCategories.map((tabItem, i) => (
              <h6
                className={`py-2 px-6 rounded-full cursor-pointer hover:bg-primary hover:text-white duration-500 font-medium ${
                  activeTab === tabItem
                    ? 'bg-primary text-white'
                    : 'bg-transparent'
                }`}
                key={i}
                onClick={() => setActiveTab(tabItem)}
              >
                {tabItem}
              </h6>
            ))}
          </div>

          {/* courses */}
          <div>
            <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
              {allCourses
                .filter(categoryFilter)
                .slice(0, 8)
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
                        <p className="text-sm opacity-75 tracking-wide">
                          {date}
                        </p>
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
              <div className="absolute h-[200px] w-full bottom-0 bg-gradient-to-b from-[#ffffff34] to-[#ffffff]" />
            </div>
            <div className="text-center mt-12 flex justify-center items-center">
              <Link to={`/all-courses`}>
                <Button>View All Courses</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCourses;
