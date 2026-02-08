const express = require("express");
const router = express.Router();

const {projects} = require("../db/db")
// #3. No tenant membership check, assumes already done before
router.get("/workpaces/:workspaceId/projects/:id", (req, res) => {
    const workspaceId= parseInt(req.params.workspaceId);
    const projectId = parseInt(req.params.id);

    const project = projects.find((p) => p.id === projectId && p.workspaceId === workspaceId);

    if(!project){
        return res.status(404).json({message: "project not found"});
    }

    res.json({
        message: "Project info",
        project
    });

});

module.exports = router;
