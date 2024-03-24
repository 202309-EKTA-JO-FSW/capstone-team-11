const mongoose = require("mongoose");

// Define the schema for the Ticket collection
const ticketSchema = new mongoose.Schema(
  {
    // user_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "User",
    //   // required: true,
    // },
    // event_id: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Event",
    //   // required: true,
    // },
    // purchase_date: {
    //   type: Date,
    //   default: Date.now,
    // },
    // status: {
    //   type: String,
    //   enum: ["pending", "confirmed", "cancelled"],
    //   default: "pending",
    // },

    createdAt: {
      type: Date,
      default: Date.now,
    },
    stripeId: {
      type: String,
      required: true,
      unique: true,
    },
    totalAmount: {
      type: String,
    },
    event: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Event",
    },
    buyer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  }
  // { timestamps: true }
);

const Ticket = mongoose.model("Ticket", ticketSchema);

module.exports = Ticket;
