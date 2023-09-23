const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();
const cors = require("cors")

const authRoutes = require("./routes/auth.js")

app.use(cors()); // Block other request which is not from your domain
app.use(express.json());

/* ROUTES */
app.use("/auth", authRoutes)

/* MONGOOSE SETUP */
const PORT = process.env.PORT || 5003;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((err) => console.log(`${err} did not connect`));
