const express = require("express")

const app = express()
app.use(express.json());

const authRoutes = require("./routes/auth");
app.use(authRoutes);

const docRoutes = require("./routes/docs");
app.use(docRoutes);

const adminRoutes = require("./routes/admin");
app.use(adminRoutes);

const projectRoutes = require("./routes/projects");
app.use(projectRoutes);

const workspaceRoutes = require("./routes/workpaces");
app.use(workspaceRoutes);

const usersRoutes = require("./routes/users");
app.use(usersRoutes);

app.get("/test", (req, res) =>{
    res.send("Server is working!");
});

app.listen(3000, () => {
    console.log("Server is working! go http://localhost:3000/test");
});