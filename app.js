const express = require("express");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes");
// const sequelize = require("./util/sequelize");

// const Task = require("./models/task");

// (async () => {
//   await sequelize.sync({ force: true });
//   const newTask = await Task.create({ name: "New task" });
//   console.log(newTask.name);
//   newTask.name = "Task 2";
//   await newTask.destroy();
// })();

// console.log("Task", Task);

// const createNewTask = async () => {
//   const task = await Task.create({ name: "Task 1" });
// };

// createNewTask();

const PORT = 3000;
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(mainRoutes);

app.listen(PORT, () => {
  console.log(`Node app is running on  ${PORT}`);
});
