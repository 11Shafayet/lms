import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';
import { blogs } from '../../data';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa6';

const Blogs = () => {
  return (
    <div className="my-12 md:my-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col text-center">
          <p className="text-lg tracking-widest capitalize">
            Do you Love to read?
          </p>
          <h3 className="font-bold text-5xl xl:text-6xl font-secondary">
            Our Blogs
          </h3>
        </div>

        <div className="relative z-10">
          <button className="arrow-left absolute top-1/2 left-0 shadow-light flex justify-center items-center w-14 h-14 bg-white rounded-lg hover:bg-primary hover:text-white duration-500 z-[1000]">
            <FaArrowLeft size={22} />
          </button>
          <button className="arrow-right absolute top-1/2 right-0 shadow-light flex justify-center items-center w-14 h-14 bg-white rounded-lg hover:bg-primary hover:text-white duration-500 z-[1000]">
            <FaArrowRight size={30} />
          </button>
          <Swiper
            grabCursor={true}
            centeredSlides={false}
            breakpoints={{
              360: {
                slidesPerView: 1,
                spaceBetween: 20,
              },

              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
            }}
            loop={true}
            navigation={{ nextEl: '.arrow-right', prevEl: '.arrow-left' }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Navigation]}
            className="mySwiper mt-6 py-12 max-w-[1200px] mx-auto px-4 relative z-10"
          >
            {blogs?.map((item, i) => (
              <SwiperSlide key={i}>
                <Link to={`/blog/${item.id}`}>
                  <div className="bg-white shadow-light rounded-lg flex flex-col overflow-hidden group">
                    <img
                      src={item.img}
                      alt=""
                      className="object-cover w-full"
                    />
                    <div className="p-4">
                      <h4 className="text-lg font-bold font-primary line-clamp-1 overflow-x-hidden text-ellipsis group-hover:text-primary duration-300">
                        {item.title}
                      </h4>
                      <p className="opacity-60">Student</p>
                      <p className="font-secondary text-lg opacity-75 line-clamp-3 overflow-x-hidden text-ellipsis">
                        <i>{item.desc}</i>
                      </p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Blogs;