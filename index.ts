import app from "./src/app.js";
import mongoose from "mongoose";
import Logger from "./src/utils/logger.js";

const APP_PORT = process.env.APP_PORT || 9000;
const APP_URL = process.env.APP_URL || `http://localhost:${APP_PORT}`;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/gethealth";


mongoose
    .connect(MONGO_URI)
    .then(() => Logger.info("MongoDB connected successfully"))
    .catch(() => Logger.error("Error connecting to the Database"));

app.listen(APP_PORT, () => Logger.debug(`Server listening on ${APP_URL}`));