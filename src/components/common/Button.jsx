/* eslint-disable react/prop-types */
const Button = ({ children, type, isSubmit }) => {
  return (
    <button
      type={isSubmit && 'submit'}
      className={`flex items-center gap-x-2 rounded-full border-2 ${
        !type
          ? 'border-primary text-primary hover:bg-primary hover:text-white'
          : 'border-white text-white hover:bg-white hover:text-primary'
      } font-medium py-4 px-12 duration-500`}
    >
      {children}
    </button>
  );
};

export default Button;
