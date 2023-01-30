import { useRef, useImperativeHandle, forwardRef } from "react";

import styles from "./Input.module.css";

const handle = (activate) => {
  return {
    focus: activate,
  };
};
const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => handle(activate));
  //   useImperativeHandle(ref, () => {
  //     return {
  //       focus: activate,
  //     };
  //   });

  return (
    <>
      <div className={`${styles.control}`}>
        <label htmlFor={props.id}>{props.label}</label>
        <input
          ref={inputRef}
          id={props.id}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          onBlur={props.onChange}
        />
      </div>
    </>
  );
});

export default Input;
