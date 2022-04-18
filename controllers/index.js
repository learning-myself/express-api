const { pickBy } = require("lodash");
const Task = require("../models/task");
const db = require("../util/db");

exports.getTasks = (_, res) => {
  db.query("SELECT * FROM tasks", (err, rows) => {
    if (err) {
      return res.send("error");
    }
    res.send(rows);
  });
  // Task.findAll().then((tasks) => {
  //   console.log(tasks);
  // });
};

exports.getTask = (req, res) => {
  const {
    params: { id },
  } = req;

  const convertedId = db.escape(id);
  const sql = "SELECT * FROM tasks WHERE id = " + convertedId;
  db.query(sql, (err, rows) => {
    if (err) {
      return res.send("error");
    }
    res.send(rows);
  });
};

exports.createTask = (req, res) => {
  const { name, status } = req.body;
  const newTask = {
    name,
    status,
  };
  // Task.createTask(newTask);
  db.query("INSERT INTO tasks SET ?", newTask, (err, data) => {
    if (err) {
      console.log(err);
      return res.send("error");
    }
    res.send(data);
  });
};

exports.editTask = (req, res) => {
  const { name, status } = req.body;
  const {
    params: { id },
  } = req;

  let newTask = {
    name,
    status,
  };

  newTask = pickBy(newTask, (value) => value !== undefined);
  db.query("UPDATE tasks SET ? WHERE id = ?", [newTask, id], (err, data) => {
    if (err) {
      return res.send("error");
    }
    res.send(data);
  });
};

exports.deleteTask = (req, res) => {
  const {
    params: { id },
  } = req;
  db.query("DELETE FROM tasks WHERE id = ?", id, (err, data) => {
    if (err) {
      return res.send(err);
    }
    res.send(data);
  });
};
