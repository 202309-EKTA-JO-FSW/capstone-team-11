const express = require("express");
const router = express.Router();

const {
  updateTicket,
  deleteTicket,
  getTickets,
  getTicket,
  createTicket,
} = require("../controllers/ticket");

const { verifyUser, verifyAdmin } = require("../utils/verifyToken");

// CREATE NEW Ticket
router.post("/:eventid", verifyAdmin, createTicket);

// UPDATE EXIST Ticket
router.put("/:id", verifyAdmin, updateTicket);

// DELETE EXIST Ticket
router.delete("/:id/:eventid", verifyAdmin, deleteTicket);

// GET EXIST Ticket
router.get("/:id", getTicket);

// GET ALL EXIST Ticket
router.get("/", getTickets);

module.exports = router;
