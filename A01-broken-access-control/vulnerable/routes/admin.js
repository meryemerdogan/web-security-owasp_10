const express = require("express");
const router = express.Router();

const {users} = require("../db/db");

// #2: No admin check
router.get("/admin/users", (req, res) => {
    res.json(
        {
            message: "All users",
            users
        });
});
module.exports = router;
