import React from "react";
import style from "./Phase3.module.css";

const Phase3 = (props) => {
  return (
    <>
      <div className={style.other_courses}>
        <div className={style.other_courses_title}>
          <h2>Check out the free english learning tips</h2>
        </div>
        <div className={style.other_courses_contents}>
          {props.other_courses.map((courses) => (
            <div key={courses.id} className={style.other_courses_contents_}>
              <div className={style.other_courses_contents_img}>
                <img src={courses.images} alt="" />
              </div>
              <div className={style.other_courses_contents_details}>
                <p>what is going to happen now</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Phase3;
