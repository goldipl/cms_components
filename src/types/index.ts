import { HttpHandler } from "msw";

export type MockHandler<T> = (
  response?: T | null,
  error?: number
) => HttpHandler;
