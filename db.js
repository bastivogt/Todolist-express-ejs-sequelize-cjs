//import sequelize from "sequelize";
const { Sequelize } = require("sequelize");

const db = new Sequelize("database", "username", "password", {
    dialect: "sqlite",
    storage: "./db.sqlite",
    logging: false,
});

module.exports = db;
