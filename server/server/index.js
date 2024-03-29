const express = require("express");
const cors = require("cors");

require("dotenv").config();

const connectToMongo = require("./db/connection");

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/users");

const app = express();
const port =
  process.env.NODE_ENV === "test"
    ? process.env.NODE_LOCAL_TEST_PORT
    : process.env.NODE_LOCAL_PORT;

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/", userRoutes);
app.use("/auth", authRoutes);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
  connectToMongo();
});

// app.get("/test", (req, res) => {
//   res.json(
//     "Server connection to client works!!  Good Luck with your capstones :D"
//   );
// });

module.exports = app;
