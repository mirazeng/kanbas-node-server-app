import model from "./model.js";

export const createCourse = (course) => {
    delete course._id
    return model.create(course);
}

export const updateCourse = (courseId, course) => model.updateOne({ _id: courseId }, { $set: course });

export const deleteCourse = (courseNumber) => model.deleteOne({ number: courseNumber });

export const fetchAllCourses = () => model.find();

