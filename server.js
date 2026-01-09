const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://USER:PASS@cluster.mongodb.net/food");

app.use("/api/auth", require("./routes/auth"));
app.use("/api/foods", require("./routes/food"));
app.use("/api/orders", require("./routes/order"));

app.listen(3000, () => console.log("Server running"));
