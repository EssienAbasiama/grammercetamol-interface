import Icons from "../../../UI/Icons/Icons";
import Img from "../../../UI/Images/coursesImg/Course1.png";

import styles from "./eachcourse.module.css";

const EachCourse = (props) => {
  return (
    <div className={styles.each}>
    
      <div className={styles.grid_item}>
        <div
          className={styles.each_course_image}
          style={{
            backgroundImage: `url(${Img})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "inherit",
            height: "200px",
            position:"relative",
            borderRadius: "10px 10px 0px 0px",
          }}
        ></div>
        <div className={styles.eachcourse_container_info}>
          <div className={styles.each_course_title}>Technical English for Beginners</div>
          <div className={styles.info_details}>
            <p className={styles.course_stack}>12 Lessons</p>
            <p className={styles.course_time}>2hrs 45min</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EachCourse;
