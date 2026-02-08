const express = require("express");
const router = express.Router();

const {users} = require("../db/db");

// #4: mass assignment (IDOR solved)
router.get("/users/me", (req, res) => {
    const user = req.user;

    Object.assign(user, req.body);
    res.json({
        message: "Updated",
        user
    })
});
module.exports = router;
