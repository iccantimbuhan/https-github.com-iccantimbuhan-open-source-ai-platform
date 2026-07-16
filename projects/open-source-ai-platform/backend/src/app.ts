import chatRoutes from "./routes/v1/chat.routes.js";
import modelRoutes from "./routes/v1/model.routes.js";
import express from "express";
import cors from "cors";

import healthRoutes from "./routes/v1/health.routes.js";


const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1/health", healthRoutes);
app.use("/api/v1/models", modelRoutes);
app.use("/api/v1/chat", chatRoutes);

export default app;