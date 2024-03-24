const express = require("express");
const router = express.Router();
const Event = require("../models/Event2");
const {
  updateEvent,
  deleteEvent,
  getEvents,
  getEvent,
  createEvent,
  countByCity,
  countByType,
  getPopularEvents,
  getPaidEvents,
  getFreeEvents,
} = require("../controllers/event");
const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

// CREATE NEW EVENT
router.post("/", verifyAdmin, createEvent);

// UPDATE EXIST EVENT
router.put("/:id", verifyAdmin, updateEvent);

// DELETE EXIST EVENT
router.delete("/:id", verifyAdmin, deleteEvent);

// GET EXIST EVENT
router.get("/:id", getEvent);

// GET ALL EXIST EVENT
router.get("/", getEvents);
router.get("/find/countByCity", countByCity);
router.get("/find/countByType", countByType);
router.get("/find/popular", getPopularEvents);
router.get("/find/paid", getPaidEvents);
router.get("/find/free", getFreeEvents);
module.exports = router;
