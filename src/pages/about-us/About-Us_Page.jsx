import AboutUs from "../../Components/Template/About-Us/AboutUs";
import NavBar from "../../Components/Template/NavBars/NavBar";
import Footer from "../../Components/Template/Footer/Footer";
import styles from "./about-us_page.module.css";

const AboutUsPage = () => {
  return (
    <section className={styles.section}>
      <NavBar />
      <AboutUs />
      <Footer />
    </section>
  );
};
export default AboutUsPage;
