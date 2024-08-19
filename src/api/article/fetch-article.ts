import { articleEndpoints } from "@/api/article/article-endpoints";
import { articleQueryKeys } from "@/api/article/article-query-keys";
import { MockHandler } from "@/types";
import { generateRandomName } from "@/utils/mock-api";
import axios from "axios";
import { delay, http, HttpResponse } from "msw";
import { useQuery } from "@tanstack/react-query";

interface FetchArticlePayload {
  id: number;
}
interface FetchArticleResponse {
  id: number;
  title: string;
  slug: string;
  previewTitle: string;
}

const fetchArticleMethod = (payload: FetchArticlePayload) => {
  return axios.get<FetchArticleResponse>(articleEndpoints.fetch, {
    params: payload,
  });
};

export const useFetchArticleQuery = (id: number) => {
  return useQuery({
    queryFn: () => fetchArticleMethod({ id }),
    select: (data) => data.data,
    queryKey: articleQueryKeys.fetch(id),
  });
};

export const fetchArticleHandlerMock: MockHandler<FetchArticleResponse> = (
  response = {
    id: 1,
    title: generateRandomName(),
    previewTitle: "FETCHED PREVIEW TITLE",
    slug: "FETCHED SLUG",
  }, error
) =>
  http.get(articleEndpoints.fetch, async () => {
    await delay();
    return HttpResponse.json(response);
  });
