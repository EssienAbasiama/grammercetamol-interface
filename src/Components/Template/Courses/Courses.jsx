import EachCourse from "./each-course/EachCourse";

import styles from "./courses.module.css";

const Courses = () => {
  return (
    <div className={styles.courses}>
      <h2>Explore Courses</h2>
      <div className={styles.grid_container}>
        <EachCourse /> 
        <EachCourse /> 
        <EachCourse /> 
        <EachCourse /> 
        <EachCourse /> 
        <EachCourse /> 
        <EachCourse /> 
        <EachCourse /> 
        <EachCourse /> 
        <EachCourse /> 
        <EachCourse /> 
      </div>
    </div>
  );
};
export default Courses;
