const Event = require("../models/Event2");
const Ticket = require("../models/Ticket");

// CREATE NEW Ticket
const createTicket = async (req, res, next) => {
  const eventId = req.params.eventid;
  const newTicket = new Ticket(req.body);
  try {
    const savedTicket = await newTicket.save();
    try {
      await Event.findByIdAndUpdate(eventId, {
        $push: { tickets_available: savedTicket._id },
      });
    } catch (err) {
      next(err);
    }
    res.status(201).json(savedTicket);
  } catch (err) {
    next(err);
  }
};

// UPDATE EXIST Ticket
const updateTicket = async (req, res, next) => {
  try {
    const updatedTicket = await Ticket.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedTicket);
  } catch (err) {
    next(err);
  }
};

// DELETE EXIST Ticket
const deleteTicket = async (req, res, next) => {
  const eventId = req.params.eventid;
  try {
    await Ticket.findByIdAndDelete(req.params.id);
    try {
      await Event.findByIdAndUpdate(eventId, {
        $pull: { tickets_available: req.params.id },
      });
    } catch (err) {
      next(err);
    }
    res.status(200).json("Ticket has been deleted.");
  } catch (err) {
    next(err);
  }
};

// GET ONE Ticket
const getTicket = async (req, res, next) => {
  try {
    const ticket = await Ticket.findById(req.params.id);
    res.status(200).json(ticket);
  } catch (err) {
    next(err);
  }
};

// GET ALL TicketS
const getTickets = async (req, res, next) => {
  try {
    const tickets = await Ticket.find();
    res.status(200).json(tickets);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createTicket,
  updateTicket,
  deleteTicket,
  getTicket,
  getTickets,
};
