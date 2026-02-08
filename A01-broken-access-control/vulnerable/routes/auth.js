const express = require("express");
const router = express.Router();

const {users} = require("../db/db")

router.post("/login", (req, res) => {
    const {username} = req.body;

    const user = users.find((u) => u.username === username);

    if(!user){
        return res.status(404).json({message: "User not found"});
    }

    res.json({
        message: "Logged in successfully",
        user
    });

});

module.exports = router;
