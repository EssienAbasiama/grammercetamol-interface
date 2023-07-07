import { defer, json } from "react-router-dom";
import Courses from "../../Components/Template/Courses/Courses";

import { getUser } from "../../../store/storage";

const CoursesPage = () => {
  return <Courses />;
};
export default CoursesPage;

async function loadAllCourses() {
  const response = await fetch("http://localhost:8023/api/cloudinary/courses");
  if (!response.ok) {
    throw json({ message: "bad request" });
  }
  return response.json();
}

// async function loadSpecificCourseDetails(id) {
//   const response = await fetch(`apicall?courseId=${id}`);
//   if (!response.ok) {
//     throw json({ message: "bad request" });
//   }
//   return response.json();
// }

export async function loader() {
  return defer({
    studentCourses: await loadStudentCourses(),
    allCourses: loadAllCourses(),
  });
}

async function loadStudentCourses() {
  const users = getUser();
  const response = await fetch(
    "http://localhost:8023/api/cloudinary/my_course/" + users.userName
  );
  if (!response.ok) {
    throw json({ message: "bad request" });
  }
  return { result: await response.json() };
}
