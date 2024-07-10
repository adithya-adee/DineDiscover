const express = require("express");
const app = express();
require("dotenv").config(); // Load environment variables
const PORT = process.env.PORT; // Default to 3001 if PORT is not defined
const mongo = require("./database");
const bodyParser = require("body-parser");
const Order = require("./models/orders");
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // Replace '*' with specific origins if needed
  res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});
app.use(bodyParser.json());
mongo();
app.get("/api", (req, res) => {
  res.json({ message: "Hello World!" });
});

app.use(express.json());
app.use("/api", require("./function/CreateUser"));
app.use("/api", require("./function/DisplayData"));
app.post("/api/auth/orderData", async (req, res) => {
  const { order_data, email, order_date } = req.body;

  try {
    // Create a new order instance
    const newOrder = new Order({
      email,
      order_data,
      order_date,
    });

    // Save the order to MongoDB
    const savedOrder = await newOrder.save();

    console.log("Order saved successfully:", savedOrder);

    res.status(200).json({ message: "Order received and saved successfully" });
  } catch (error) {
    console.error("Error saving order:", error);
    res.status(500).json({ error: "Failed to save order" });
  }
});
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
