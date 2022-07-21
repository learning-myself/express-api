const { Op } = require("sequelize");
const { pickBy } = require("lodash");
const Task = require("../models/task");
const {
  getOffset,
  getLimit,
  getCurrentPageIndex,
  getPageCount,
  getOrder,
} = require("../util");

exports.getTasks = async (req, res) => {
  let { currentPageIndex, pageSize, sortBy, keyword } = req.query;

  const offset = getOffset(currentPageIndex, pageSize);
  const limit = getLimit(pageSize);
  const order = getOrder(sortBy);

  options = {
    offset,
    limit,
  };
  if (order) {
    options = {
      ...options,
      order,
    };
  }
  if (keyword) {
    options = {
      ...options,
      where: {
        name: {
          [Op.like]: `%${keyword}%`,
        },
      },
    };
  }
  try {
    const getItems = Task.findAll({
      attributes: ["id", "name", "status"],
      ...options,
    });
    const getTotalCount = Task.count(options);
    const [items, totalCount] = await Promise.all([getItems, getTotalCount]);
    const currentPageIndex = getCurrentPageIndex(offset, limit);
    const pageCount = getPageCount(totalCount, limit);
    const data = {
      items,
      totalCount,
      pageSize: limit,
      currentPageIndex,
      pageCount,
    };
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.getTask = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const data = await Task.findByPk(id);
    res.send(data);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.createTask = async (req, res) => {
  const { name, status } = req.body;
  const newTask = {
    name,
    status,
  };

  try {
    await Task.create(newTask);
    res.end();
  } catch (err) {
    console.log(err);
    return res.send("error");
  }
};

exports.CreateBulkTasks = async () => {};

exports.editTask = async (req, res) => {
  const { name, status } = req.body;
  const {
    params: { id },
  } = req;
  let newTask = {
    name,
    status,
  };
  newTask = pickBy(newTask, (value) => value !== undefined);
  try {
    await Task.update(newTask, {
      where: {
        id,
      },
    });
    res.end();
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.deleteTask = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    await Task.destroy({
      where: {
        id,
      },
    });
    res.end();
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
