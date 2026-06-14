import { Router } from "express";
import { getAllProjects, getProjectById } from "../services/project.service.js";
import { createSuccessResponse } from "../utils/response.util.js";

const router = Router();

router.get("/projects", async (req, res) => {
  const projects = await getAllProjects();
  const response = createSuccessResponse(
    "Projects fetched successfully",
    projects,
  );
  return res.status(200).json(response);
});

router.get("/projects/:id", async (req, res) => {
  const id = req.params.id;
  const project = await getProjectById(id);
  if (!project) {
    return res.status(404).json({
      message: "project not found",
    });
  }

  const response = createSuccessResponse(
    "Project fetched successfully",
    project,
  );
  return res.status(200).json(response);
});

export default router;
