import { GlobalToken, theme } from "antd";
import { CSSProperties, PropsWithChildren } from "react";

type RawProperties = Pick<
  CSSProperties,
  | "gridArea"
  | "gridTemplateColumns"
  | "gridGap"
  | "gridRowGap"
  | "gridColumnGap"
  | "gap"
  | "gridTemplateRows"
  | "gridTemplateAreas"
  | "alignItems"
  | "justifyItems"
  | "width"
  | "height"
  | "padding"
  | "paddingLeft"
  | "paddingRight"
  | "paddingTop"
  | "paddingBottom"
  | "background"
  | "borderBottom"
  | "borderTop"
  | "boxShadow"
  | "justifySelf"
  | "alignSelf"
  | "borderRadius"
>;

type Properties = {
  [K in keyof RawProperties]?:
    | RawProperties[K]
    | ((token: GlobalToken) => RawProperties[K]);
};

type Props = PropsWithChildren<Properties> & { style?: CSSProperties };

const isFn = (fn: unknown): fn is (token: GlobalToken) => RawProperties =>
  typeof fn === "function";

export const GridBox = ({ children, style, ...props }: Props) => {
  const { token } = theme.useToken();
  const propsToStyle = Object.fromEntries(
    Object.entries(props).map(([key, value]) =>
      isFn(value) ? [key, value(token)] : [key, value]
    )
  ) as RawProperties;

  return (
    <div
      style={{
        display: "grid",
        ...style,
        ...propsToStyle,
      }}
      children={children}
    />
  );
};
