import React from 'react';

export default function Input({
  label,
  value,
  onChange,
  placeholder,
  className,
  type,
}) {
  return (
    <div className={`flex items-center w-96 ${className}`}>
      {label && <label className="p-2 text-white text-xl w-2/5">{label}</label>}
      <input
        className={`border-2 border-red-400 w-full rounded-md p-2 `}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
        type={type}
      />
    </div>
  );
}

export const ModalInputs = ({
  label,
  value,
  onChange,
  placeholder,
  className,
}) => {
  return (
    <div className="flex items-center w-96">
      <label className="p-2 text-white text-xl w-1/3">{label}</label>
      <input
        className={`ml-2 p-2 border-2 border-red-400 rounded ${className}`}
        onChange={onChange}
        value={value}
        placeholder={placeholder}
      />
    </div>
  );
};
