import app from "./src/app.js";
import mongoose from "mongoose";
import Logger from "./src/utils/logger.js";

const APP_PORT = process.env.PORT || 9000;
const APP_URL = process.env.APP_URL || `http://localhost:${APP_PORT}`;
const MONGO_URI = process.env.MONGO_URI || "mongodb://localhost:27017/gethealth";


mongoose
    .connect(MONGO_URI)
    .then(() => Logger.warn("MongoDB connected successfully"))
    .catch((error) => Logger.error("Error connecting to the Database", error));

app.listen(APP_PORT, () => Logger.info(`Server listening on ${APP_URL}`));