import { Router } from "express";
const router = Router();
import type { User } from "../types/user.types.js";

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

router.get("/health", (req, res) => {
  res.status(200).json({
    success: true,
    message: gethealthyMessage(),
    users: [adminUser, memberuser],
  });
});

export default router;
