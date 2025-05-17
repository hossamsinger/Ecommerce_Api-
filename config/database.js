const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI)
    .then((conn) =>
      console.log(
        `Connected to MongoDB  hostneme = ${conn.connection.host}`.bgGreen.bold
      )
    )
    .catch((err) => {
      console.log(`Database connection error ${err}`.bgRed.bold);
      process.exit(1);
    });
};

module.exports = {dbConnection} ;
