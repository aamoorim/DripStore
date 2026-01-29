Checkout.jsx
const Input = ({ label, placeholder }) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm font-semibold text-dark-gray">
        {label} *
      </label>
      <input
        type="text"
        placeholder={placeholder}
        className="bg-light-gray-3 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>
  );
};

export default Input;
