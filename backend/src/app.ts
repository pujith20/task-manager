import express from "express";
import cors from "cors";
import "reflect-metadata";
import taskRoutes from "./routes/task.routes";
import errorHandler from "./middleware/errorHandler";

const app = express();
app.use(cors({
  origin: true, // adjust if frontend uses a different port
  credentials: true
}));
app.use(express.json());

app.use("/api", taskRoutes);
app.use(errorHandler);

export default app;