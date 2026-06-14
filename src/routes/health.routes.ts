import { Router } from "express";
const router = Router();
import type { User } from "../types/user.types.js";
import type { ApiResponse } from "../types/api.types.js";
import { createSuccessResponse } from "../utils/response.util.js";

function gethealthyMessage(): string {
  return "Sever is healthy";
}

const adminUser: User = {
  id: "1",
  name: "Mayank",
  email: "admin@gmail.com",
  role: "owner",
};

const memberuser: User = {
  id: "string",
  name: "string",
  email: "member@gmail.com",
  role: "member",
};

const testUser: User = {
  id: "100",
  name: "TEST",
  email: "test@gmail.com",
  role: "admin",
};

router.get("/health", (req, res) => {
  const response = createSuccessResponse("server is healthy", [
    adminUser,
    memberuser,
  ]);
  res.status(200).json(response);
});

export default router;
