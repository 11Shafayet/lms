import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { blogs } from '../data';
import Sidebar from '../components/blogs/Sidebar';

const SingleBlogPage = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState({});
  const path = pathname.split('/blog/').pop();

  useEffect(() => {
    if (path) {
      const pathId = parseInt(path);
      const blogItem = blogs.find((item) => item.id === pathId);
      setData(blogItem);
    }
  }, [path, data]);

  useEffect(() => {
    if (path) {
      window.scrollTo(0, 0);
    }
  }, [path, data]);

  return (
    <>
      {data.id && (
        <div>
          <div
            className="relative z-10 bg-cover bg-center bg-no-repeat flex justify-center items-center min-h-[60vh]"
            style={{ backgroundImage: `url(${data.img})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 opacity-70 -z-10" />
            <h4 className="capitalize font-primary text-3xl md:text-5xl font-bold max-w-[800px] text-center text-white !leading-snug">
              {data.title}
            </h4>
          </div>

          <div className="py-12 md:py-20">
            <div className="container px-4 mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-20">
                <div className="col-span-1 lg:col-span-2">
                  <div>
                    <div className="relative mb-3">
                      <img
                        src={data.img}
                        alt="blog"
                        className="w-full max-h-[500px] object-cover rounded-lg"
                      />
                      <div className="absolute bottom-5 right-5 bg-black bg-opacity-40 py-3 px-6 rounded-md text-white font-bold text-xl">
                        {data.date}
                      </div>
                    </div>
                    <h3 className="text-3xl font-secondary font-bold group-hover:text-primary duration-300 mt-6">
                      {data.title}
                    </h3>
                    <p className="leading-normal tracking-wide opacity-50 mt-3">
                      {data.desc}
                    </p>
                    <div className="mt-6">
                      <h6 className="font-primary text-2xl font-bold !leading-snug mb-3">
                        Content
                      </h6>
                      <ul className="list-disc opacity-60 pl-3 flex flex-col gap-y-2">
                        {data.content.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="col-span-1">
                  <Sidebar searchBar="false" />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleBlogPage;
