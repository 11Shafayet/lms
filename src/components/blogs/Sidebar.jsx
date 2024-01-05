/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { blogs } from '../../data';

const Sidebar = ({ searchedText, setSearchedText, searchBar }) => {
  return (
    <div className="bg-white shadow-light rounded-xl p-4 md:p-8">
      <div>
        {!searchBar && (
          <input
            type="text"
            className="input-with-shadow w-full"
            placeholder="Search Blog"
            value={searchedText}
            onChange={(e) => setSearchedText(e.target.value)}
          />
        )}

        <h4 className="text-3xl font-secondary font-bold mt-6">
          Popular Posts
        </h4>
        <div className="flex flex-col gap-y-4 mt-4">
          {blogs.slice(0, 5).map((blog, i) => {
            return (
              <Link
                to={`/blog/${blog.id}`}
                className="flex gap-3 items-start"
                key={i}
              >
                <img
                  src={blog.img}
                  alt={blog.title}
                  className="w-20 h-auto object-cover rounded"
                />
                <div>
                  <h5 className="font-bold text-xl font-secondary line-clamp-1 text-ellipsis overflow-x-hidden">
                    {blog.title}
                  </h5>
                  <p className="opacity-50 text-sm">{blog.date}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
