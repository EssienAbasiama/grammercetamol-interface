import Courses from "../../Components/Template/Courses/Courses";
import Footer from "../../Components/Template/Footer/Footer";
import NavBar from "../../Components/Template/NavBars/NavBar";

import styles from "./coursepage.module.css";

const CoursesPage = () => {
  return (
    <section className={styles.section}>
      <NavBar />
      <Courses />
      <Footer />
    </section>
  );
};
export default CoursesPage;
