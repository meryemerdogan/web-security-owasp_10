const express = require("express");
const router = express.Router();

const {documents} = require("../db/db");

// #1 IDOR : Secret documents can be accessed only knowing user id
// Does not do ownership check
router.get("/docs/:id", (req, res) => {
    const docId = parseInt(req.params.id);

    const doc = documents.find( (d) => d.id === docId);

    if(!doc) {
        return res.status(404).json({
            message: "Doc not found"
        });
    }

    res.json(doc);
});
module.exports = router;