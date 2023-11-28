import express from "express";
import { json } from "express";
import connectToMongoDB from "./conn.js";
import routes from "./routes/routes.js";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3000;

const app = express();

app.use(json());
app.use("/", routes);

const startServer = async () => {
  await connectToMongoDB();

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`MongoDB connected at ${process.env.MONGODB_URI}`);
  });
};

startServer();
