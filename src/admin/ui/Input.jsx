import { forwardRef } from "react";

const InputComponent = forwardRef(
  ({ id, type, name1, className, placeholder, value, onChange }, ref) => {
    return (
      <input
        type={type}
        name={name1}
        id={id}
        className={className}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        ref={ref}
      />
    );
  }
);

export default InputComponent;
