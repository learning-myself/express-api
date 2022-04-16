const express = require("express");
const bodyParser = require("body-parser");
const mainRoutes = require("./routes");

const Task = require("./models/task");

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
