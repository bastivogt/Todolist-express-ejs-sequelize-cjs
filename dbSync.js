const db = require("./db.js");

// import the models
const TodoModel = require("./apps/TodoApp/models/TodoModel.js");

db.sync()
    .then(() => {
        console.log("Database synchronized");
    })
    .catch((err) => {
        console.error("Error synchronizing database:", err);
    });
