import Courses from "../../Components/Template/Courses/Courses";
import Footer from "../../Components/Template/Footer/Footer";

import styles from "./coursepage.module.css";

const CoursesPage = () => {
  return (
    <section className={styles.section}>
      <Courses />
      <Footer />
    </section>
  );
};
export default CoursesPage;
