import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { allCourses } from '../data';

import Sidebar from '../components/singleCourse/Sidebar';
import SingleCourse from '../components/singleCourse/SingleCourse';

const SingleCoursePage = () => {
  const { pathname } = useLocation();
  const [data, setData] = useState({});
  const path = pathname.split('/courses/').pop();

  useEffect(() => {
    if (path) {
      const pathId = parseInt(path);
      const courseItem = allCourses.find((item) => item.id === pathId);
      setData(courseItem);
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
        <div >
          <div
            className="relative z-10 bg-cover bg-center bg-no-repeat flex justify-center items-center min-h-[60vh]"
            style={{ backgroundImage: `url(${data.banner})` }}
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
                  <SingleCourse data={data} />
                </div>

                <div className="col-span-1">
                  <Sidebar price={data.price} />
                </div>
              </div>
            </div>
          </div>

          <ToastContainer
            position="bottom-center"
            autoClose={1000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </div>
      )}
    </>
  );
};

export default SingleCoursePage;
