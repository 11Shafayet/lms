/* eslint-disable react/prop-types */
import { allCategories } from '../../data';

const Sidebar = () => {
  return (
    <div className="bg-white shadow-light rounded-xl p-4 md:p-8">
      <div>
        <h4 className="text-3xl font-secondary font-bold">
          Filter By Category
        </h4>
        <div className="flex flex-col justify-center items-start gap-y-2 flex-wrap mt-8 mb-6">
          {allCategories.map((tabItem, i) => (
            <h6
              className={`py-2 px-6 rounded-full cursor-pointer hover:bg-primary hover:text-white duration-500 font-medium w-full `}
              key={i}
            >
              {tabItem}
            </h6>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
