const express = require("express");
const app = express();

const connectDB = require("./config/db");

connectDB();

app.use(express.json({ extended: false }));
app.use("/api", require("./routes/api/orders"));

const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.json("listen");
});

app.listen(PORT, () => {
  console.log("Server started on port " + PORT);
});
