const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mainRoutes = require("./routes");

const PORT = 3001;
const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(mainRoutes);

app.listen(PORT, () => {
  console.log(`Node app is running on  ${PORT}`);
});
