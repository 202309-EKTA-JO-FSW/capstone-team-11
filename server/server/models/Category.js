const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  // name: String,
  // description: String,
  // event_ids: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],

  name: { type: String, required: true, unique: true },
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;
