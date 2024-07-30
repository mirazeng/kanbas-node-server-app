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
        const { id } = req.params;
        const status = await dao.updateCourse(id, req.body);
        res.json(status);
    };
    app.put("/api/courses/:id", updateCourse);

    const deleteCourse = async (req, res) => {
        const status = await dao.deleteCourse(req.params.number);
        res.json(status);
    }
    app.delete("/api/courses/:id", deleteCourse);

}