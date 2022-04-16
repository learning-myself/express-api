const { INTEGER, STRING, BOOLEAN, Model } = require("sequelize");
const { DataTypes } = require("sequelize");

const sequelize = require("../util/sequelize");

const Task = sequelize.define("task", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  name: DataTypes.STRING,
  status: DataTypes.BOOLEAN,
});

// const createNewTask = async () => {
//   const task = await Task.create({ name: "Task 1" });
//   console.log("task", task);
// };

// createNewTask();

module.exports = Task;
