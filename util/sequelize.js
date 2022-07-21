const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("crud", "root", "25091994", {
  dialect: "mysql",
  host: "localhost",
});

const connectionTest = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully");
  } catch (error) {
    console.log(error);
    console.error("Unable to connect to the database", error);
  }
};

// sequelize.sync({
//   force: true,
// });

connectionTest();

module.exports = sequelize;
