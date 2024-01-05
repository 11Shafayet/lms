import Blogs from '../components/home/Blogs';
import Hero from '../components/home/Hero';
import Subscribe from '../components/home/Subscribe';
import Testimonial from '../components/home/Testimonial';
import TopCourses from '../components/home/TopCourses';

const Home = () => {
  return (
    <>
      <Hero />
      <TopCourses />
      <Subscribe />
      <Blogs />
      <Testimonial />
    </>
  );
};

export default Home;
