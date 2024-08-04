import CourseDetailsIntro from "./_components/CourseDetailsIntro";
import Testimonials from "./_components/Testimonials";
import RelatedCourses from "./_components/RelatedCourses";
import CourseDetails from "./_components/CourseDetails";

import { getCourseDetails, getRelatedCourses } from "@/queries/courses";
import { replaceMongoIdInArray } from "@/lib/convertData";

const SingleCoursePage = async ({ params: { id } }) => {
  const course = await getCourseDetails(id);

  const relatedCourse = await getRelatedCourses(course?.category?._id, id);

  return (
    <>
      <CourseDetailsIntro course={course} />

      <CourseDetails course={course} />

      {course?.testimonials && course?.testimonials?.length > 0 && (
        <Testimonials
          testimonials={replaceMongoIdInArray(course?.testimonials)}
        />
      )}

      <RelatedCourses relatedCourse={relatedCourse} />
    </>
  );
};
export default SingleCoursePage;
