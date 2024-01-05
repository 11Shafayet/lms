import Sidebar from '../components/blogs/Sidebar';
import bannerImage from '/images/28.jpg';

const AllBlog = () => {
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
            <div className="col-span-1 lg:col-span-2"></div>

            <div className="col-span-1">
              <Sidebar />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllBlog;
