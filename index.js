const express = require("express");
const { json, urlencoded } = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
const mongoStore = require("connect-mongo");

const passportlocal = require("./src/config/passport_local-S");

const router = require("./src/routes/Routes");
const connect = require("./src/config/database");

var expresslayouts = require("express-ejs-layouts");
const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded());

app.use(expresslayouts);

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
app.set("layout", __dirname + "/src/views/layouts/home_layout");
app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(
  session({
    name: "Twitter",
    secret: "Risheel",
    resave: false,
    cookie: {
      maxAge: 600000,
    },
    store: new mongoStore({
      mongoUrl:'mongodb://localhost:27017/Twitter_clone',
      autoRemove: "disable",
    }),
  },function(err){
    if(err){
      console.error(err);

    }
    console.log('connect-mongo setup done');
  })
);

app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

app.use("/", router);
app.use(express.static(__dirname + "/src/assets"));

app.listen(3000, async () => {
  await connect();
  console.log("server stared at 3000!!!");
});
