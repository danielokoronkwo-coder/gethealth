import app from "./src/app.js";
import mongoose from "mongoose";
import Logger from "./src/utils/logger.js";

const APP_PORT = process.env.PORT || 9000;
const APP_URL = process.env.APP_URL || `http://localhost:${APP_PORT}`;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/gethealth";

async function connect() {
  try {
    await mongoose.connect(MONGO_URI);
    Logger.info("MongoDB connected successfully")
  } catch (error: any) {
    Logger.error("Error connecting to the Database")
    Logger.error(error)
  }
}


connect()

app.listen(APP_PORT, () => Logger.debug(`Server listening on ${APP_URL}`));