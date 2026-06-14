import { projects } from "../data/projects.data.js";
import type { Project } from "../types/project.types.js";

export async function getAllProjects(): Promise<Project[]> {
  return projects;
}

export async function getProjectById(id: string): Promise<Project | undefined> {
  return projects.find((project) => project.id === id);
}
