// since this project is developed to demonstrate security vulnarabilities,
// i did not use a real db
const users = [
    {id:1, username: "meryem", role:"user"},
    {id:2, username:  "erdogan", role:"user"},
    {id:3, usernmae: "admin", role:"admin"}
]

const documents= [
    {
        id : 1,
        title : "meryems-doc",
        ownerid: 1
    },
    {
        id : 2,
        title : "erdogans-hw",
        ownerid: 2    
    }
]
const workspaces = [
    {id :1, name: "Workspace 1"},
    {id :2, name: "Workspace 2"}
]
const memberships =[
    {userId: 1, workspaceId: 1},
    {userId: 2, workspaceId: 2},
    {userId: 3, workspaceId: 1},
    {userId: 3, workspaceId: 2},
]
const projects = [
    {id: 1, name: "Project1", workspaceId: 1, ownerId: 1}, 
    {id: 2, name: "Project2", workspaceId: 2, ownerId: 2} 
]
module.exports = { users, documents, workspaces, memberships, projects}