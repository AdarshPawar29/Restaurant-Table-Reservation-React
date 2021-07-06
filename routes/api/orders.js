const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Orders = require("../../models/Orders");

//@POST  /api/newOrder
router.post(
  "/newOrder",
  [
    check("date", "Date is Required").not().isEmpty(),
    check("time", "Time is required").not().isEmpty(),
    check("guests", "Please enter number of guests").not().isEmpty(),
    check("phone", "Phone number is required").not().isEmpty(),
    check("name", "Name is required").not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(500).json({ msg: errors.array() });
    }

    const { name, date, time, guests, phone } = req.body;
    try {
      let newOrder = await Orders.findOne({ name });

      if (newOrder) {
        return res.status(400).json({ msg: "Order already exists" });
      }

      newOrder = new Orders({
        name,
        date,
        time,
        guests,
        phone,
      });

      await newOrder.save();
      return res.json(newOrder);
    } catch (error) {
      console.log(error);
      res.status(500).send("Server Error!");
    }
  }
);

//@GET  /api/orders
router.get("/orders", async (req, res) => {
  try {
    let orders = await Orders.find().populate("orders"["name"]);

    res.json(orders);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error!");
  }
});

//@GET   /api/orders/:phone
router.get("/orders/:phone", async (req, res) => {
  try {
    const order = await Orders.find({
      phone: req.params.phone,
    });

    if (!order) {
      return res.status(404).json({ msg: "There is no order with this name" });
    }
    res.json(order);
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error!");
  }
});

module.exports = router;
