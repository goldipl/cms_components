import { css, cx } from "@emotion/css";
import { CSSInterpolation } from "@emotion/css/create-instance";
import { GlobalToken, theme } from "antd";
import { useMemo } from "react";

export const useClasses = <T extends Record<string, CSSInterpolation>>(
    styleCallback: ({ token }: { token: GlobalToken }) => T, deps?: any[] = []
  ) => {
    const { token } = theme.useToken();
  
    const classes = useMemo(() => {
      const rawStyles = styleCallback({ token });
      const entries = Object.entries(rawStyles);
      const mappedEntries = entries.map(([key, value]) => [
        key,
        css(...(Array.isArray(value) ? value : [value])),
      ]);
      return Object.fromEntries(mappedEntries);
    }, deps) as  Record<keyof T, string>;
  
    return {classes, cx};
  };