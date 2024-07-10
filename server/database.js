const mongoose = require("mongoose");
const mongo_URL = process.env.mongo_URL;

const mongo = async () => {
  try {
    await mongoose.connect(mongo_URL);
    console.log("connected to database");
    const fetched_items = await mongoose.connection
      .collection("food_items")
      .find({});
    global.data_items = await fetched_items.toArray();
    const fetched_Category = await mongoose.connection
      .collection("food_category")
      .find({});
    global.data_cat = await fetched_Category.toArray();
  } catch (err) {
    console.log(err);
  }
};

module.exports = mongo;
