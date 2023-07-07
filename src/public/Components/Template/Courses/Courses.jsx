import EachCourse from "./each-course/EachCourse";
import { Await, NavLink, useRouteLoaderData } from "react-router-dom";

import styles from "./courses.module.css";
import { Suspense } from "react";

const Courses = () => {
  const { allCourses, studentCourses } = useRouteLoaderData("loadcourses");

  return (
    <div className={styles.courses}>
      <h2>Explore Courses</h2>
      <div className={styles["each-course"]}>
        <Suspense fallback={<p style={{ color: "yellow" }}>Loading.......</p>}>
          <Await resolve={allCourses}>
            {(loadedEvent) => (
              <>
                {loadedEvent.map((course) => (
                  <NavLink key={course.courseId} to={`${course.courseId}`}>
                    <EachCourse course={course} />
                  </NavLink>
                ))}
              </>
            )}
          </Await>
        </Suspense>
      </div>
      <div className="">
        <h2>My Courses</h2>
        <div className={styles["each-course1"]}>
          <Suspense
            fallback={<p style={{ color: "yellow" }}>Loading.......</p>}
          >
            <Await resolve={studentCourses.result}>
              {(loadedEvent) => (
                <>
                  {loadedEvent.map((course) => (
                    <NavLink
                      key={course.allCoursesDto[0].courseId}
                      to={`${course.allCoursesDto[0].courseId}`}
                    >
                      <EachCourse course={course.allCoursesDto[0]} />
                    </NavLink>
                  ))}
                </>
              )}
            </Await>
          </Suspense>
        </div>
      </div>
    </div>
  );
};
export default Courses;
