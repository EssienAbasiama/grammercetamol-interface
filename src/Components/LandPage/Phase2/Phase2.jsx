import React from "react";
import style from "./Phase2.module.css";
import { Teacher, Teacher4, Study, Smile } from "../../UI/constants";

const phase2 = [
  {
    id: "1",
    images: Teacher,
  },
  {
    id: "2",
    images: Teacher4,
  },
  {
    id: "3",
    images: Study,
  },
  {
    id: "4",
    images: Smile,
  },
];

const Phase2 = (props) => {
  return (
    <>
      <div className={style.course}>
        <div className={style.course_title}>
          <h2>Explore Course</h2>
        </div>
        <div className={style.course_contents}>
          {phase2.map((course) => (
            <div key={course.id} className={style.course_contents_}>
              <div className={style.course_image}>
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
