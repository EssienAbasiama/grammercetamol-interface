import AboutUs from "../../Components/Template/About-Us/AboutUs";
import Footer from "../../Components/Template/Footer/Footer";
import styles from "./about-us_page.module.css";

const AboutUsPage = () => {
  return (
    <section className={styles.section}>
      <AboutUs />
      <Footer />
    </section>
  );
};
export default AboutUsPage;
