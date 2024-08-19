import { createApiUrl } from "@/utils/create-api-url";

const base = createApiUrl("/article");

export const articleEndpoints = {
  fetch: base(""),
  create: base("/create"),
} as const;
