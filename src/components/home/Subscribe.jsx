import { Link } from 'react-router-dom';
import img25 from '/images/25.jpg';
import Button from '../common/Button';
import { useState } from 'react';
import { toast } from 'react-toastify';

const Subscribe = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !phone || !email) {
      toast.warning('All field is required.');
    } else {
      console.log(name, email, phone);
      toast.success('Form was sent Successfully!');
    }
  };

  return (
    <div
      className="my-12 min-h-[60vh] bg-cover bg-center bg-no-repeat flex items-center justify-center relative py-12 z-10"
      style={{ backgroundImage: `url(${img25})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30 -z-10" />
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12 w-full items-center">
          <div className="flex flex-col items-center md:items-start text-white">
            <p className="text-xl tracking-widest">
              Get 100+ Online Courses for free!
            </p>
            <h3 className="font-bold text-5xl xl:text-7xl font-secondary">
              Subscribe to get It
            </h3>
            <div className="my-12 flex">
              <Link to={`/all-courses`}>
                <Button type="white">View All Courses</Button>
              </Link>
            </div>
          </div>
          <div className="w-full">
            <form
              action=""
              onSubmit={handleSubmit}
              className="bg-white shadow-light p-12 lg:p-20 rounded-md"
            >
              <h4 className="text-3xl font-medium font-secondary max-w-[500px] text-center mx-auto">
                Subscribe with your email to get updated!
              </h4>
              <div className="mt-4">
                <label htmlFor="name" className="font-semibold">
                  Your Name
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="Shafayetur Rahman"
                  className="input-with-shadow w-full mt-2"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="phone" className="font-semibold">
                  Phone Number
                </label>
                <input
                  name="phone"
                  type="tel"
                  placeholder="+8801638-719578"
                  className="input-with-shadow w-full mt-2"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                />
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="font-semibold">
                  Your Email
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="11shafayet@gmail.com"
                  className="input-with-shadow w-full mt-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mt-6">
                <Button isSubmit="submit">Subscribe Now</Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
