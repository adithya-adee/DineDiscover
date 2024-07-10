const express = require("express");
const router = express.Router();

router.post("/foodData", (req, res) => {
  try {
    res.send([global.data_items, global.data_cat]);
  } catch (err) {
    console.log(err);
    res.send("Server Error");
  }
});

module.exports = router;
