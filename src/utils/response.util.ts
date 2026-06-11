import type { ApiResponse } from "../types/api.types.js";

export function createSuccessResponse<T>(
  message: string,
  data: T,
): ApiResponse<T> {
  return {
    success: true,
    message,
    data,
  };
}
