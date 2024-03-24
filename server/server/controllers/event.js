const { Promise } = require("mongoose");
const Event = require("../models/Event2");

// CREATE NEW EVENT
const createEvent = async (req, res, next) => {
  const newEvent = new Event(req.body);
  try {
    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (err) {
    next(err);
  }
};

// UPDATE EXIST EVENT
const updateEvent = async (req, res, next) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedEvent);
  } catch (err) {
    next(err);
  }
};

// DELETE EXIST EVENT
const deleteEvent = async (req, res, next) => {
  try {
    await Event.findByIdAndDelete(req.params.id);
    res.status(200).json("Event has been deleted.");
  } catch (err) {
    next(err);
  }
};

// GET ONE EVENT
const getEvent = async (req, res, next) => {
  try {
    const event = await Event.findById(req.params.id);
    res.status(200).json(event);
  } catch (err) {
    next(err);
  }
};

// GET ALL EVENTS
const getEvents = async (req, res, next) => {
  const { min, max, ...other } = req.query;
  try {
    const events = await Event.find({
      ...other,
      price: { $gt: min || 1, $lt: max || 999 },
    })
      .limit(req.query.limit)
      .sort({ createdAt: -1 });
    //   {
    //   ...other,
    //   price: { $gt: min || 1, $lt: max || 999 },
    // }
    // ()
    // .limit(req.query.limit);
    res.status(200).json(events);
  } catch (err) {
    next(err);
  }
};

const countByCity = async (req, res, next) => {
  const cities = req.query.city.split(",");
  try {
    const list = await Promise.all(
      cities.map((city) => {
        return Event.countDocuments({ city: city });
      })
    );
    res.status(200).json(list);
  } catch (err) {
    next(err);
  }
};

const countByType = async (req, res, next) => {
  try {
    const freeEventCount = await Event.countDocuments({ isFree: true });
    const paidEventCount = await Event.countDocuments({ isFree: false });
    res.status(200).json({ freeEventCount, paidEventCount });
  } catch (err) {
    next(err);
  }
};

const getFreeEvents = async (req, res, next) => {
  try {
    const freeEvents = await Event.find({ isFree: true });
    res.status(200).json(freeEvents);
  } catch (err) {
    next(err);
  }
};

const getPaidEvents = async (req, res, next) => {
  try {
    const paidEvents = await Event.find({ isFree: false });
    res.status(200).json(paidEvents);
  } catch (err) {
    next(err);
  }
};

const getPopularEvents = async (req, res, next) => {
  try {
    const limit = parseInt(req.query.limit);
    const popularEvents = await Event.find({ isPopular: true })
      .limit(limit)
      .sort({ createdAt: -1 });
    res.status(200).json(popularEvents);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  createEvent,
  updateEvent,
  deleteEvent,
  getEvent,
  getEvents,
  countByCity,
  countByType,
  getPopularEvents,
  getPaidEvents,
  getFreeEvents,
};
