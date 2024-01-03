import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

import Home from '../pages/Home';
import AboutUs from '../pages/AboutUs';
import Contact from '../pages/Contact';
import SingleBlogPage from '../pages/SingleBlogPage';
import AllCourses from '../pages/AllCourses';
import AllCategory from '../pages/AllCategory';
import SingleCoursePage from '../pages/SingleCoursePage';
import AllBlog from '../pages/AllBlog';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/all-blog',
        element: <AllBlog />,
      },
      {
        path: '/blog/:id',
        element: <SingleBlogPage />,
      },
      {
        path: '/all-courses',
        element: <AllCourses />,
      },
      {
        path: '/courses/:id',
        element: <SingleCoursePage />,
      },
      {
        path: '/all-category',
        element: <AllCategory />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
    ],
  },
]);

export default router;
