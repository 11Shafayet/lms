import { Link, useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import logo from '/images/logo.png';
import { FaEnvelope, FaPhoneAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { navData } from '../../data';

const Navbar = () => {
  const { activeNav, setActiveNav } = useAuth();
  const [hamActive, setHamActive] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    if (pathname) {
      setActiveNav(pathname);
    }
  }, [pathname, setActiveNav]);

  return (
    <div className="relative z-[11111]">
      {/* topbar */}
      <div className="bg-primary text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-center sm:justify-end items-center gap-x-6">
            <p className="flex justify-center items-center tracking-widest gap-x-2">
              <FaPhoneAlt />
              +8801638-719578
            </p>
            <p className="flex justify-center items-center tracking-widest gap-x-2">
              <FaEnvelope />
              11shafayet@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* navbar */}
      <div className="bg-white !text-secondary shadow-lg py-3 z-[11111]">
        <div className="container mx-auto px-4 z-[11111]">
          <div className="flex justify-between items-center gap-x-4">
            <Link to="/">
              <img src={logo} alt="logo" className="max-w-[50px] h-auto" />
            </Link>
            <div
              className="block md:hidden group cursor-pointer w-11 h-6 relative"
              onClick={() => setHamActive((prev) => !prev)}
            >
              <div className="w-11 h-0.5 bg-black block group-hover:-translate-x-3 duration-500" />
              <div className="w-11 h-0.5 bg-black block translate-y-1.5 group-hover:translate-x-1 duration-500" />
              <div className="w-11 h-0.5 bg-black block  translate-y-3 group-hover:-translate-x-3 duration-500" />
            </div>
            <ul className="hidden md:flex justify-center items-center gap-x-1">
              {navData.map((item, i) => {
                return (
                  <li key={i}>
                    <Link
                      to={item.link}
                      className={`font-semibold uppercase tracking-wider pt-4 pb-3.5 px-5 flex justify-center items-center rounded-md hover:bg-primary hover:text-white duration-500 ${
                        activeNav === item.link && 'bg-primary text-white'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          <div
            className={`absolute top-36 w-full h-screen bg-white bg-opacity-80 backdrop-blur-md shadow-light p-4 justify-center items-start pt-32 duration-500 z-[11111] ${
              hamActive ? 'right-0 flex' : '-right-[150%] hidden'
            }`}
          >
            <div
              className="absolute top-7 right-7 w-11 h-12 group cursor-pointer z-[100000]"
              onClick={() => setHamActive(false)}
            >
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-0.5 bg-black block rotate-45 duration-500" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 group-hover:-rotate-[30deg] w-8 h-0.5 bg-black block -rotate-45 duration-500" />
            </div>
            <ul className="flex flex-col justify-center items-center gap-y-4">
              {navData.map((item, i) => {
                return (
                  <li key={i} onClick={() => setHamActive(false)}>
                    <Link
                      to={item.link}
                      className={`font-semibold uppercase tracking-wider py-4 px-5 flex justify-center items-center rounded-md hover:bg-primary hover:text-white duration-500 ${
                        activeNav === item.link && 'bg-primary text-white'
                      }`}
                    >
                      {item.title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
