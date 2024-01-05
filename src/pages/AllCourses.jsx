import { FaStar } from 'react-icons/fa6';
import { allCourses } from '../data';
import img1 from '/images/1.jpg';
import { FaComment, FaStarHalfAlt, FaUser } from 'react-icons/fa';
import Sidebar from '../components/courses/Sidebar';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const AllCourses = () => {
  const [searchedText, setSearchedText] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterSearch = (item) => {
    if (item.title.toLowerCase().includes(searchedText.toLowerCase())) {
      return item;
    } else return;
  };

  const filterCategory = (item) => {
    if (selectedCategory === 'All') {
      return item;
    }
    if (item.category === selectedCategory) {
      return item;
    } else return;
  };

  return (
    <div>
      <div
        className="relative min-h-[60vh] bg-cover bg-center bg-no-repeat flex justify-center items-center z-10"
        style={{ backgroundImage: `url(${img1})` }}
      >
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-400 to-pink-400 opacity-50" />
        <div className="container mx-auto px-4 text-center">
          <h4 className="font-secondary text-white font-bold text-6xl">
            All Courses
          </h4>
        </div>
      </div>

      <div className="my-6 md:my-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-20">
            <div className="col-span-1 md:col-span-2">
              <div className="flex flex-col sm:flex-row items-center gap-2 justify-between mb-6">
                <p className="opacity-90">Total {allCourses.length} courses</p>

                <input
                  type="text"
                  placeholder="Search Course"
                  className="input-with-shadow"
                  value={searchedText}
                  onChange={(e) => setSearchedText(e.target.value)}
                />
              </div>

              <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {allCourses
                  .filter(filterCategory)
                  .filter(filterSearch)
                  .map((course, i) => {
                    const {
                      banner,
                      title,
                      topSeller,
                      rating,
                      date,
                      price,
                      description,
                      enrolled,
                      id,
                    } = course;
                    return (
                      <Link
                        to={`/courses/${id}`}
                        className="border rounded-md group overflow-hidden group"
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
                          <p className="opacity-75 text-sm leading-relaxed font-light line-clamp-4 overflow-x-hidden text-ellipsis my-4">
                            {description}
                          </p>
                          <div className="flex items-center gap-x-0.5 mt-3">
                            <FaStar size={11} />
                            <FaStar size={11} />
                            <FaStar size={11} />
                            <FaStar size={11} />
                            <FaStarHalfAlt size={11} />
                            <p className="text-[12px] opacity-75">({rating})</p>
                          </div>
                          <div className="border-t pt-3 mt-3 flex items-center gap-x-4">
                            <div className="flex items-center gap-x-1 opacity-60">
                              <FaUser />
                              <p>{enrolled}</p>
                            </div>
                            <div className="flex items-center gap-x-1 opacity-60">
                              <FaComment />
                              <p>2</p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
              </div>
            </div>

            <div className="col-span-1 md:col-span-1">
              <Sidebar
                setSelectedCategory={setSelectedCategory}
                selectedCategory={selectedCategory}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllCourses;
