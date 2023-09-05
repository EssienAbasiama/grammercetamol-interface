import React from "react";
import style from "./Phase3.module.css";
import {
  Teacher1,
  Teacher2,
  Teacher3,
  Teacher5,
  Teacher_pupil,
} from "../../../UI/constants";

const phase3 = [
  {
    id: "1",
    images: Teacher3,
  },
  {
    id: "2",
    images: Teacher1,
  },
  {
    id: "3",
    images: Teacher_pupil,
  },
  {
    id: "4",
    images: Teacher5,
  },
  {
    id: "5",
    images: Teacher2,
  },
];

const Phase3 = (props) => {
  return (
    <>
      <div className={style.other_courses}>
        <div className={style.other_courses_title}>
          <h2>Check out the free english learning tips</h2>
        </div>
        <div className={style.grid_container}>
          {phase3.map((courses) => (
            <div key={courses.id} className={style.grid_item}>
              {/* <div className={style.other_courses_contents_img}>
                <img src={courses.images} alt="" />
              </div> */}
              {/* style.other_courses_contents_img */}
              <div
                    // className={}
                    style={{
                      backgroundImage: `url(${courses.images})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      width: "370px",
                      height: "200px",
                      borderRadius: "10px",
                    }}
                  ></div>
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
