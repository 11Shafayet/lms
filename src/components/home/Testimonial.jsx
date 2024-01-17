import { useRef } from 'react';
// Import Swiper styles
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { testimonials } from '../../data';
import './Testimonial.css';

import { useInView, motion } from 'framer-motion';

const Testimonial = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  return (
    <motion.div
      ref={ref}
      style={{
        transform: isInView ? 'none' : 'translateY(200px)',
        opacity: isInView ? 1 : 0,
        transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s',
      }}
      className="py-12 md:py-20"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col text-center">
          <p className="text-lg tracking-widest capitalize">
            See Some Of our students reviews!
          </p>
          <h3 className="font-bold text-5xl xl:text-6xl font-secondary">
            What Students Says
          </h3>
        </div>

        <div>
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
                spaceBetween: 40,
              },
            }}
            loop={true}
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
            className="mySwiper mt-6 py-12 text-center max-w-[1100px] mx-auto px-4 relative z-10"
          >
            {testimonials?.map((item, i) => (
              <SwiperSlide
                className="bg-white shadow-light p-4 md:p-8 rounded flex flex-col items-center"
                key={i}
              >
                <img
                  src={item.img}
                  alt=""
                  className="object-cover text-center w-20 h-20 rounded-full"
                />
                <h4 className="text-lg font-bold font-primary mt-2">
                  {item.name}
                </h4>
                <p className="opacity-60">Student</p>
                <p className="font-secondary text-lg opacity-75">
                  <i>{item.review}</i>
                </p>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </motion.div>
  );
};

export default Testimonial;
