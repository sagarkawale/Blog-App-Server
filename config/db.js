const mongoose = require("mongoose");
const colors = require("colors");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected to MongoDB Database`.bgMagenta.white);
  } catch (error) {
    console.log(`Mongo connect error`.bgRed.white);
  }
};

module.exports = connectDB;
