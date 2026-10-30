//import TodoModel from "./apps/TodoApp/models/TodoModel.js";
const TodoModel = require("./apps/TodoApp/models/TodoModel.js");

const todos = [
    {
        title: "First Todo",
        text: "This is the first todo item",
        completed: false,
    },
    {
        title: "Second Todo",
        text: "This is the second todo item",
        completed: true,
    },
];

const seedTodos = async () => {
    try {
        await TodoModel.bulkCreate(todos);
        console.log("Database seeded successfully");
    } catch (err) {
        console.error("Error seeding database:", err);
    }
};

seedTodos();
