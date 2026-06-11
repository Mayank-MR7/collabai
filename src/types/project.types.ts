import { BaseEntity } from "./base.types.js";

export interface Project extends BaseEntity {
  name: string;
  description: string;
}
