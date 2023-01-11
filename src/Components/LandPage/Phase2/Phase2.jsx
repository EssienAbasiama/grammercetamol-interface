import React from "react";
import style from "./Phase2.module.css";
// import image from "../../UI/Images/teacher.png";

const Phase2 = (props) => {
  return (
    <>
      <div className={style.course}>
        <div className={style.course_title}>
          <h2>Explore Course</h2>
        </div>
        <div className={style.course_contents}>
          {props.courses.map((course) => (
            <div className={style.course_contents_}>
              <div key={course.id} className={style.course_image}>
                <img src={course.images} alt="" />
              </div>
              <div className={style.course_entails}>
                <p>
                  Diction and English FLuency Course <br />7 courses
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Phase2;
