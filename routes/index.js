const express = require("express");
const controller = require("../controllers");

const router = express.Router();

router.get("/tasks", controller.getTasks);
router.get("/tasks/:id", controller.getTask);
router.post("/task", controller.createTask);
router.put("/tasks/:id", controller.editTask);
router.delete("/tasks/:id", controller.deleteTask);

module.exports = router;
