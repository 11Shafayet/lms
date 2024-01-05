import { useState } from 'react';
import Sidebar from '../components/blogs/Sidebar';
import bannerImage from '/images/28.jpg';
import { blogs } from '../data';
import { Link } from 'react-router-dom';

const AllBlog = () => {
  const [searchedText, setSearchedText] = useState('');

  const searchFilter = (item) => {
    if (searchedText === '') {
      return item;
    } else if (item.title.toLowerCase().includes(searchedText.toLowerCase())) {
      return item;
    } else return;
  };
  return (
    <div>
      <div
        className="relative z-10 bg-cover bg-center bg-no-repeat flex justify-center items-center min-h-[60vh]"
        style={{ backgroundImage: `url(${bannerImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 opacity-70 -z-10" />
        <h4 className="capitalize font-primary text-3xl md:text-5xl font-bold max-w-[800px] text-center text-white !leading-snug">
          All Blogs
        </h4>
      </div>

      <div className="py-12 md:py-20">
        <div className="container px-4 mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-20">
            <div className="col-span-1 lg:col-span-2">
              <div className="flex flex-col gap-y-8">
                {blogs.filter(searchFilter).map((item, i) => (
                  <Link to={`/blog/${item.id}`} className="group" key={i}>
                    <div className="relative mb-3">
                      <img
                        src={item.img}
                        alt="blog"
                        className="w-full max-h-[500px] object-cover rounded-lg"
                      />
                      <div className="absolute bottom-5 right-5 bg-black bg-opacity-40 py-3 px-6 rounded-md text-white font-bold text-xl">
                        {item.date}
                      </div>
                    </div>
                    <h3 className="text-3xl font-secondary font-bold group-hover:text-primary duration-300">
                      {item.title}
                    </h3>
                    <p className=" line-clamp-2 opacity-50 mt-3">{item.desc}</p>
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-span-1">
              <Sidebar
                searchedText={searchedText}
                setSearchedText={setSearchedText}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlog;
