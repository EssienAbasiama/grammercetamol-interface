import Phase1 from "../../Components/Template/LandPage/Phase1/Phase1";
import Phase2 from "../../Components/Template/LandPage/Phase2/Phase2";
import Phase3 from "../../Components/Template/LandPage/Phase3/Phase3";

const LandPage = (props) => {
  return (
    <>
      <Phase1 />
      <Phase2 />
      <Phase3 other_courses={props.phase3} />
    </>
  );
};

export default LandPage;
