import { articleEndpoints } from "@/api/article/article-endpoints";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { delay, http, HttpResponse } from "msw";
import { Http2ServerResponse } from "http2";
import { error } from "console";
import { MockHandler } from "@/types";

interface CreateArticlePayload {
  title: string;
  slug: string;
  previewTitle: string;
}

interface CreateArticleResponse extends CreateArticlePayload {
  id: number;
}

const createArticleMethod = (payload: CreateArticlePayload) => {
  return axios.post<CreateArticleResponse>(articleEndpoints.create, payload);
};

export const useCreateArticleMutation = () => {
  return useMutation({
    mutationFn: createArticleMethod,
  });
};

export const createArticleHandlerMock: MockHandler<CreateArticleResponse> = (
  response = {
    id: 1,
    title: "RETURNED TITLE",
    previewTitle: "RETURNED PREVIEW TITLE",
    slug: "RETURNED SLUG",
  },
  error
) =>
  http.post(articleEndpoints.create, async () => {
    await delay(700);
    if (error) return new HttpResponse(null, { status: error });
    return HttpResponse.json(response);
  });
