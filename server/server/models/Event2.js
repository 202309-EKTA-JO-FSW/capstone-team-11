const { Decimal128, mongoose } = require("mongoose");

const eventSchema = new mongoose.Schema({
  // title: String,
  // description: String,
  // location: String,
  // images: [String],
  // date: Date,
  // time: Date,
  // categories: [{ type: mongoose.Schema.Types.ObjectId, ref: "Category" }],
  // tickets_available: Number,
  // admin_user_id: { type: mongoose.Schema.Types.ObjectId, ref: "Admin" },

  title: { type: String, required: true, default: "Even's title" },
  description: { type: String, default: "Event's Description" },
  location: { type: String, default: "Amman" },
  createdAt: { type: Date, default: Date.now },
  imageUrl: {
    type: String,
    default: "https://placehold.co/600x400?text=Event+Master",
  },
  startDateTime: { type: Date, default: Date.now },
  endDateTime: { type: Date, default: Date.now },
  price: { type: Number, default: 0, required: true },
  isFree: { type: Boolean, default: true, required: true },
  url: { type: String, default: "https://example.com/event" },
  category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
  organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  isPopular: { type: Boolean, default: false },
  rating: {
    type: Number,
    default: 0.0,
    min: 0.0,
    max: 5.0,
  },
});

const Event = mongoose.model("Event", eventSchema);

module.exports = Event;
