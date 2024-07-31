import * as dao from "./dao.js";

export default function CourseRoutes(app) {

    const fetchAllCourses = async (req, res) => {
        const courses = await dao.fetchAllCourses();
        res.json(courses);
    };
    app.get("/api/courses", fetchAllCourses);

    const createCourse = async (req, res) => {
        const newCourse = await dao.createCourse(req.body);
        res.json(newCourse);
    };
    app.post("/api/courses", createCourse);

    const updateCourse = async (req, res) => {
        const { courseNumber } = req.params;
        const status = await dao.updateCourse(courseNumber, req.body);
        res.json(status);
    };
    app.put("/api/courses/:courseNumber", updateCourse);

    const deleteCourse = async (req, res) => {
        const {courseNumber} = req.params;
        const status = await dao.deleteCourse(courseNumber);
        res.json(status);
    }
    app.delete("/api/courses/:courseNumber", deleteCourse);

}