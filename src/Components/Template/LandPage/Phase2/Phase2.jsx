import React from "react";
import { Teacher, Teacher4, Study, Smile } from "../../../UI/constants";

import style from "./Phase2.module.css";

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

const Phase2 = () => {
  return (
    <>
      <div className={style.course}>
        <div className={style.course_title}>
          <h2>Explore Course</h2>
        </div>
        <div className={style.course_contents}>
          {phase2.map((course) => (
            <div key={course.id} className={style.course_contents_}>
              {/* <div className={style.course_image} >
                <img src={course.images} alt="" />
              </div> */}
              <div
                    className={style.course_image}
                    style={{
                      backgroundImage: `url(${course.images})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "400px",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                  ></div>
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
