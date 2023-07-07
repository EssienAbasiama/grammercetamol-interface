import Icons from "../../../UI/Icons/Icons";
import Img from "../../../UI/Images/coursesImg/Course1.png";

import styles from "./eachcourse.module.css";

const EachCourse = (props) => {
  // const course = props.course;
  const { courseName, lessons } = props.course;

  return (
    <div className={styles.each}>
      <div>
        <img src={Img} alt="" />
        <div className={styles["description"]}>
          <h2>{courseName}</h2>
          <div className={styles["description__"]}>
            <div className={styles["more-description"]}>
              <Icons icons="fa-solid fa-layer-group" />
              <p>{`${lessons} Lessons`}</p>
            </div>
            <div className={styles["time"]}>
              <Icons icons="fa-regular fa-clock" />
              <p>2 hr 40 mins</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EachCourse;
