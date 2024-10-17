import { useState, ChangeEvent, FocusEvent } from "react";

const FloatingLabelInput: React.FC = () => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [value, setValue] = useState<string>("");

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e: FocusEvent<HTMLInputElement>) => {
    if (!e.target.value) {
      setIsFocused(false);
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    setIsFocused(e.target.value.length > 0);
  };

  return (
    <div className="relative mb-6">
      <input
        type="email"
        id="email"
        value={value}
        onFocus={handleFocus}
        onBlur={handleBlur}
        onChange={handleChange}
        className={`block w-full px-0 py-2 border-b-2 border-gray-300 focus:border-blue-500 focus:outline-none transition-all duration-200 ${
          isFocused || value ? "pt-6" : "pt-4"
        }`}
      />
      <label
        htmlFor="email"
        className={`absolute left-0 top-2 transition-all duration-200 ease-in-out transform ${
          isFocused || value
            ? "text-blue-500 text-xs -translate-y-4"
            : "text-gray-500"
        }`}
      >
        Email
      </label>
    </div>
  );
};

export default FloatingLabelInput;
