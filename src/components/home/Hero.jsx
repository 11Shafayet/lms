// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';

import { FaArrowLeftLong, FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';
import { heroData } from '../../data';
import Button from '../common/Button';

const Hero = () => {
  return (
    <div className="bg-secondary py-12">
      <div className="container mx-auto px-4">
        <div className="relative  min-h-[70vh]">
          <button className="arrow-left absolute bottom-36 left-[33%]  sm:top-1/2 sm:-translate-y-1/2 sm:left-7 border w-11 h-11 rounded-full border-primary text-white flex items-center justify-center z-[1000]">
            <FaArrowLeftLong size={20} />
          </button>
          <button className="arrow-right absolute bottom-36 right-[33%] sm:top-1/2 sm:-translate-y-1/2 sm:right-7 border w-11 h-11 rounded-full border-primary text-white flex items-center justify-center z-[1000]">
            <FaArrowRightLong size={20} />
          </button>
          <Swiper
            grabCursor={true}
            centeredSlides={false}
            loop={true}
            navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
            modules={[Navigation]}
            className="mySwiper relative h-full rounded-md"
          >
            {heroData.map((item, i) => (
              <SwiperSlide
                key={i}
                className="relative flex justify-center items-center bg-cover bg-center bg-no-repeat min-h-[70vh] z-10 rounded-md"
                style={{ backgroundImage: `url(${item.img})` }}
              >
                <div className="absolute inset-0 bg-black bg-opacity-40 -z-10" />
                <div className="max-w-[80%] lg:max-w-[660px] text-center text-white mx-auto">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold capitalize font-secondary !leading-snug mb-12">
                    {item.title}
                  </h2>
                  <div className="text-center mt-12 flex justify-center items-center">
                    <Link to={`/all-courses`}>
                      <Button type={`white`}>Explore Courses</Button>
                    </Link>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Hero;
