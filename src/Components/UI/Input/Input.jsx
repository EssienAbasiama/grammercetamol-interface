import { useRef, useImperativeHandle, forwardRef } from "react";

import styles from "./Input.module.css";

const handle = (activate) => {
  return {
    focus: activate,
  };
};
// export const Input = forwardRef((props, ref) => {
//   const inputRef = useRef();

//   const activate = () => {
//     inputRef.current.focus();
//   };

//   useImperativeHandle(ref, () => handle(activate));

//   return (
//     <>
//       <div className={`${props.className} ${styles.control}`}>
//         <label htmlFor={props.id}>{props.label}</label>
//         <input
//           ref={inputRef}
//           name={props.name}
//           id={props.id}
//           type={props.type}
//           value={props.value}
//           onChange={props.onChange}
//           onBlur={props.onBlur}
//         />
//         {props.hasError && <p>{props.message}</p>}
//       </div>
//     </>
//   );
// });

export const Input = forwardRef((props, ref) => {
  const inputRef = useRef();

  const activate = () => {
    inputRef.current.focus();
  };

  useImperativeHandle(ref, () => handle(activate));

  return (
    <>
      <div>
        <div className={styles.ok}>
          <input
            ref={inputRef}
            name={props.name}
            id={props.id}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            placeholder={props.placeholder}
          />
          <i className={props.icon}></i>
        </div>
        {props.hasError && <p>{props.message}</p>}
      </div>
    </>
  );
});
