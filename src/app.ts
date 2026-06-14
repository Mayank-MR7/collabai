import express from "express";
import healthRoutes from "./routes/health.routes.js";
import projectRoutes from "./routes/project.routes.js";
const app = express();

app.use(healthRoutes);
app.use(projectRoutes);

export default app;
