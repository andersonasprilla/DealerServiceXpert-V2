const Button = ({ onClick, children }) => {
  return (
    <button
      type="button"
      className="block rounded-md bg-gray-900 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
