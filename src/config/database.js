const mongoose = require("mongoose");
const connect = () => {
    console.log("mongodb connected");
 return mongoose.connect("mongodb://localhost:27017/Twitter_clone");
};
module.exports =connect;