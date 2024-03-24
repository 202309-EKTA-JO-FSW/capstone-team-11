const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    google_auth_id: String,
    image: {
      type: String,
      default:
        "https://content.linkedin.com/etc.clientlibs/settings/wcm/designs/gandalf/clientlibs/resources/images/avatar-mobile-center.png",
    },
    tickets: [{ type: mongoose.Schema.Types.ObjectId, ref: "Ticket" }],
    eventsBooked: [Number],
    isAdmin: {
      type: Boolean,
      default: false,
    },
    managed_events: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],

    // clerkId: { type: String, required: true, unique: true },
    // email: { type: String, required: true, unique: true },
    // username: { type: String, required: true, unique: true },
    // firstName: { type: String, required: true },
    // lastName: { type: String, required: true },
    // photo: { type: String, required: true },
  }
  // { timestamps: true }
);

module.exports = mongoose.model("user", UserSchema);
