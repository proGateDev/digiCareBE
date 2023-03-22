const express = require("express");
const router = express.Router();
const controller = require("../controllers/user");
//==========================================
router.get("/", controller.getUser);
router.post("/", controller.postUser);
router.get("/house-signs", controller.getUserHouseSigns);
router.get("/transit", controller.getUserTransit);

module.exports = router;
