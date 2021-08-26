const express = require("express");
const router = require("./src/routes/Routes");
var expresslayouts = require('express-ejs-layouts');
const app = express();

app.use(expresslayouts);
app.set('layout',__dirname+'/src/views/layouts/home_layout');
app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use("/", router);

app.listen(3000, () => {
  console.log("server stared at 3000!!!");
});
