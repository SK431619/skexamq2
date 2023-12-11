const express = require("express");
const app = express();
const port = 3001;
const maincontrollers = require("./controllers/maincontroller");

app.set("view engine", "ejs");

app.get("/", maincontrollers.flowers);

app.get("/p1", maincontrollers.trees);
app.get("/p2", maincontrollers.cars);

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
