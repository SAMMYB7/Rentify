import { useState } from "react";

const FloatingLabelInput = ({ label, type, name, value, onChange }) => {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="relative w-full">
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="peer w-full px-3 pt-3 py-2 border border-gray-300 rounded-md outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition bg-transparent"
        onFocus={() => setIsFocused(true)}
        onBlur={(e) => setIsFocused(e.target.value !== "")}
        placeholder=" " 
        required
      />
      <label
        className={`absolute left-3 text-gray-500 text-sm transition-all duration-200
        peer-placeholder-shown:top-2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 
        ${isFocused || value ? "top-[-3px] text-xs text-blue-500" : "top-4"}`}
      >
        {label}
      </label>
    </div>
  );
};

export default FloatingLabelInput;
