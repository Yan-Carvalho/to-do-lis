const mongoose = require("mongoose");

const db = process.env.MONGO_URI;

const connectDB = () => {
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Mongo DB Conectado"))
    .catch((err) => console.log(err));
};
module.exports = connectDB;
