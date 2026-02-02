export const FilterGroup = ({ title, inputType, options }) => {
  return (
    <div className="mb-6">
      <h4 className="text-[#474747] text-[14px] font-bold mb-3 tracking-wide">{title}</h4>
      <div className="flex flex-col gap-3">
        {options.map((option, index) => (
          <label key={index} className="flex items-center gap-2 cursor-pointer group">
            <input
              type={inputType}
              name={title}
              value={option.value || option.text}
              className="w-[22px] h-[22px] accent-[#C92071] cursor-pointer"
            />
            <span className="text-[#474747] text-[14px] leading-none group-hover:text-[#C92071] transition-colors">
              {option.text}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};