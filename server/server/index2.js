const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/auth");
const eventsRoutes = require("./routes/events");
const ticketsRoutes = require("./routes/tickets");
const usersRoutes = require("./routes/users");
const cookieParser = require("cookie-parser");
const cors = require("cors");

require("dotenv").config();
const app = express();
const port = 3001;

const connect = () => {
  try {
    mongoose.connect(process.env.MONGODB2);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected");
});

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/events", eventsRoutes);
app.use("/api/tickets", ticketsRoutes);
app.use("/api/users", usersRoutes);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});
if (process.env.NODE_ENV !== "test") {
  app.listen(port, () => {
    connect();
    console.log(`Server listening on port ${port}`);
  });
} else {
  // In test environment, just connect to the database without listening on a port
  connect();
}
module.exports = app;
