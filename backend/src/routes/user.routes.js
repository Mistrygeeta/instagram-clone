const express = require("express");
const { registerController } = require("../controllers/auth.controller");
const authMiddleware = require("../middlewares/auth.middleware");
const router = express.Router();


router.post("/register",authMiddleware, registerController)
module.exports = router