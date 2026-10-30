// import db from "../../../db.js";
// import { DataTypes } from "sequelize";

const db = require("../../../db.js");
const { DataTypes } = require("sequelize");

const Todo = db.define("Todo", {
    title: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    text: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    completed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

module.exports = Todo;
