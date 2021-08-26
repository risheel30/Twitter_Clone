const express = require("express");

const homeController = require("../controllers/HomeController");
const userRouter = require("./user");

const router = express.Router();

console.log("Router Up!!");
router.get('/', homeController.root);
router.use('/users', userRouter);

module.exports = router;
