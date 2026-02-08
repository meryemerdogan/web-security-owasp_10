const express = require("express");
const router = express.Router();

const {projects} = require("../db/db")
// #5 ownership takeover (object reassignment)
router.get("/projects/:id", (req, res) => {
    const projectId = parseInt(req.params.id);

    const project = projects.find((p) => p.id === projectId);

    if(!project){
        return res.status(404).json({message: "project not found"});
    }
    Object.assign(project, req.body);

    res.json({
        message: "Project info",
        project
    });

});

module.exports = router;
