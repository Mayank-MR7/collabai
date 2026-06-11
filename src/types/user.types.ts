import type { BaseEntity } from "./base.types.js";
export interface User extends BaseEntity {
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
}

export type UserRole = "owner" | "admin" | "member";
