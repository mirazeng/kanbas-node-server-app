import db from "../Database/index.js";
import * as dao from "./dao.js";

export default function ModuleRoutes(app) {

    const findModuleForCourse = async (req, res) =>
    { const modules = await dao.findModuleForCourse(req.params.courseId);
        res.json(modules);
    }
    app.get("/api/courses/:cid/modules", findModuleForCourse);


    const createModule = async (req, res) => {
        const newModule = await dao.createModule(req.body);
        res.json(newModule);
    }
    app.post("/api/courses/:cid/modules", createModule);


    const updateModule = async (req, res) => {
        const {mid} = req.params;
        const status = await dao.updateModule(mid, req.body);
        res.json(status);
    }
    app.put("/api/modules/:mid", updateModule);


    const deleteModule = async (req, res) => {
        const status = await dao.deleteModule(req.params.mid);
        res.json(status);
    }
    app.delete("/api/modules/:mid", deleteModule);
}
