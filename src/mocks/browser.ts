import { apiMockHandlers } from "@/api/api-mocks";
import { setupWorker } from "msw/browser";

export const worker = setupWorker(...apiMockHandlers);
