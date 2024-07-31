import db from "../Database/index.js";
import * as dao from "./dao.js";

export default function ModuleRoutes(app) {

    /* This method looks up in MODULES Tables, to find which module entry contain "course" matching "courseNumber"/"number" */
    const findModuleInCourse = async (req, res) => {
        const modules = await dao.findModuleInCourse(req.params.number);
        res.json(modules);
    }
    app.get("/api/modules/:number", findModuleInCourse);


    const createModule = async (req, res) => {
        const newModule = await dao.createModule(req.body);
        res.json(newModule);
    }
    app.post("/api/modules", createModule);


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
