const fs = require("fs");
// Import event model
const eventModel = require("../models/event");

const userController = {};

userController.getAllEvents = async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const perPage = 10;
  try {
    const totalEvents = await eventModel.countDocuments();
    const totalPages = Math.ceil(totalEvents / perPage);
    const events = await eventModel
      .find()
      .skip((page - 1) * perPage)
      .limit(perPage);
    res.json({
      events,
      totalPages,
    });
    // const events = await eventModel
    //   .find({}, { images: { $slice: 1 } })
    //   .limit(10);
    // res.status(200).json(events);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

userController.eventPost = async (req, res) => {
  const { title, description, location, address, date, time, guests } =
    req.body;
  console.log(req.body);

  try {
    const images = req.files.map((file) => {
      const encode_image = file.buffer.toString("base64");
      const imageSizeInBytes = encode_image.length;
      const imageSizeInMegabytes = imageSizeInBytes / (1024 * 1024);
      if (imageSizeInMegabytes > 1) {
        // Image size exceeds 1 megabyte, send JSON response
        return res
          .status(413)
          .json({ message: "Image size exceeds 1 megabyte" });
      }

      return {
        contentType: file.mimetype,
        data: Buffer.from(encode_image, "base64"),
      };
    });

    const requiredFields = [
      "title",
      "description",
      "location",
      "address",
      "date",
      "time",
      "guests",
    ];

    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(422).json({
          message: `${
            field.charAt(0).toUpperCase() + field.slice(1)
          } is required`,
        });
      }
    }

    const tickets_available = parseInt(guests);
    const isoDate = `${date}T${time}:00.000Z`;
    const dateAndTime = new Date(isoDate);

    const newEvent = new eventModel({
      title,
      description,
      location,
      address,
      dateAndTime,
      tickets_available,
      images,
    });

    const savedEvent = await newEvent.save();
    res.status(201).json({ message: "Event successfully created" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = userController;
