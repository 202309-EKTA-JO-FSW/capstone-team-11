const express = require("express");
const router = express.Router();
const {
  updateUser,
  deleteUser,
  getUser,
  getUsers,
} = require("../controllers/user2");

const {
  verifyToken,
  verifyUser,
  verifyAdmin,
} = require("../utils/verifyToken");

// const fs = require("file-system");

// //Import event model
// const eventModel = require("../models/event.js");
// const upload = require("../middleware/upload.js");

// //Import user controller
// const userController = require("../controllers/user");

// router.post("/events", upload.array("images", 10), userController.eventPost);
// router.get("/events", userController.getAllEvents);
// // router.post("/event", (req, res) => {
// //   res.json(
// //     "Server connection to client works!!  Good Luck with your capstones :D"
// //   );
// //   console.log("test worked");
// // });

// router.get("/checkauthentication", verifyToken, (req, res, next) => {
//   res.send("Hello user, you are logged in");
// });

// router.get("/checkuser/:id", verifyUser, (req, res, next) => {
//   res.send("hello user, you are logged in and you can delete your account");
// });

// router.get("/checkadmin/:id", verifyAdmin, (req, res, next) => {
//   res.send("hello admin, you are logged in and you can delete all accounts");
// });

// UPDATE EXIST USER
router.put("/:id", verifyUser, updateUser);

// DELETE EXIST USER
router.delete("/:id", verifyUser, deleteUser);

// GET EXIST USER
router.get("/:id", verifyUser, getUser);

// GET ALL EXIST USER
router.get("/", verifyAdmin, getUsers);

module.exports = router;
