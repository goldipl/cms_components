import { createArticleHandlerMock } from "./create-article";
import { fetchArticleHandlerMock } from "./fetch-article";

export const articleMockHandlers = [
  createArticleHandlerMock(),
  fetchArticleHandlerMock(),
];
