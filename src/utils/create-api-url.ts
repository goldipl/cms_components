export const createApiUrl =
  <T extends string>(base: T) =>
  <U extends string = "">(tail: U) =>
    `/api${base}${tail}` as const;
