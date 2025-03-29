const Input = ({ label, type }) => {
  return (
    <div className="relative w-72 group mx-auto">
      <input
        type={type}
        className="peer block w-full border border-gray-300 rounded-md px-3 pt-5 pb-2 text-base bg-transparent focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
        placeholder=" "
      />
      <label className="absolute left-3 top-3 text-gray-500 text-base transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-lg peer-placeholder-shown:text-gray-400 peer-focus:top-3 peer-focus:text-sm peer-focus:text-blue-500">
        {label}
      </label>
    </div>
  );
};

export default Input;
