const express = require("express");
const router = express.Router();
const controller = require("../controllers/members");
const checkUserToken = require("../../middleware/jwt");
const multer = require('multer');
const uploadData = require("../../middleware/upload");

//==========================================
// const upload = multer({ storage:  storage }); // Ensure a destination is set


router.post(
    "/",
    checkUserToken,
    uploadData.single('file'),
    controller.createUserMember
);
router.get("/", checkUserToken, controller.getUserMembers);



module.exports = router;