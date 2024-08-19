export const articleQueryKeys = {
  all: ["article"] as const,
  fetch: (id: number) => [...articleQueryKeys.all, id] as const,
};
