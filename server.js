/* ==================================================================
-------------------Using dependencies Defult -------------------------
==================================================================*/
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { dbConnection } = require("./config/database");
const app = express();
const port = process.env.PORT || 5000;
dotenv.config();

/* ==================================================================
-------------------Using mongoose connection-------------------------
==================================================================*/
dbConnection();
/* ==================================================================
-------------------Using express middleware-------------------------
==================================================================*/
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
  console.log("You are in development mode".bgRed.bold);
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(cors());

/* ==================================================================
-------------------Using express Router-------------------------
==================================================================*/
const categoryRouter = require("./routes/categoryRoutes");
app.use("/api/v1", categoryRouter);

/* ==================================================================
-------------------Using server start-------------------------
==================================================================*/
app.listen(port, () => {
  console.log(`APP LISTENING ON PORT ${port}  `.bgYellow.bold);
});
