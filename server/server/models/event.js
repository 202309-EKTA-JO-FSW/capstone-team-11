const mongoose = require("mongoose");
//Schema for a single image to use it in the event schema as Array
const imageSchema = mongoose.Schema({
  data: {
    type: Buffer,
    required: true,
  },
  //content type to store the type of image e.g. image/png
  contentType: {
    type: String,
    required: true,
  },
});

const event = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 50,
  },
  description: {
    type: String,
    required: true,
  },
  images: [imageSchema],

  location: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dateAndTime: {
    type: Date,
  },
  categories: {
    type: [String],
  },
  tickets_available: {
    type: Number,
    required: true,
  },
});
module.exports = mongoose.model("event", event);
