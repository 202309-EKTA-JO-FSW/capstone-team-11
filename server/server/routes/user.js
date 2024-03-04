const express = require("express");
const router = express.Router();
const fs = require("file-system");

//Import event model
const eventModel = require("../models/event");
const upload = require("../middleware/upload.js");

//Import user controller
const userController = require("../controllers/user");

router.post("/events", upload.array("images", 10), userController.eventPost);
router.get("/events", userController.getAllEvents);
// router.post("/event", (req, res) => {
//   res.json(
//     "Server connection to client works!!  Good Luck with your capstones :D"
//   );
//   console.log("test worked");
// });

module.exports = router;
