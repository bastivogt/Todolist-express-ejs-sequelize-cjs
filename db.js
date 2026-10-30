import sequelize from "sequelize";  

const db = new sequelize("database", "username", "password", {
    dialect: "sqlite",
    storage: "./db.sqlite"
});

export default db;  