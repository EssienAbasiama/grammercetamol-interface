import Img from "../../../UI/Images/coursesImg/Course1.png";

import styles from "./eachcourse.module.css";

const EachCourse = () => {
  return (
    <div className={styles.each}>
      <div>
        <img src={Img} alt="" />
      </div>
    </div>
  );
};
export default EachCourse;
