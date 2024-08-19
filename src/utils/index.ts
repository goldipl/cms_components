export const condition = <T>(bool: boolean | undefined | null, value: T) =>
  bool ? value : undefined;

export const multiplyMap = <T>(
  length: number,
  callback: (index: number) => T
) => Array.from({ length }).map((_, index) => callback(index));
