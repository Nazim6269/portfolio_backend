const mongoose = require("mongoose");
const { mongoUrl } = require("../../secret.ts");

const connectMongo = async () => {
  try {
    await mongoose.connect(mongoUrl);
    console.log("DB connected Successfully");
  } catch (error) {
    console.log(error);
  }
};

export { connectMongo };
