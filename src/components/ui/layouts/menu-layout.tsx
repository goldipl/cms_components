import { Layout, SiderProps, theme } from "antd";
import { PropsWithChildren, ReactNode } from "react";
const { Sider: AntdSider } = Layout;

const SIDER_PADDING = 10;
const SIDER_COLLAPSED_WIDTH = 72;
const SIDER_TOP_SECTION_HEIGH = 200;

interface Props {
  TopComponent?: ReactNode;
  CenterComponent?: ReactNode;
  BottomComponent?: ReactNode;
  collapsedState?: "hide" | "icons" | "full";
  "aria-label"?: string;
}

const useStyles = () => {
  const { token } = theme.useToken();
  const siderStyle: React.CSSProperties = {
    scrollbarWidth: "thin",
    scrollbarColor: "unset",
    zIndex: 1,
    height: "100vh",
    overflow: "auto",
    overflowX: "hidden",
  };

  const sidebarGridStyle: React.CSSProperties = {
    display: "grid",
    height: "100%",
    gridTemplateRows: `minmax(${SIDER_TOP_SECTION_HEIGH}px, auto) 1fr auto`,
    rowGap: SIDER_PADDING,
    padding: SIDER_PADDING,
    borderRight: `1px solid ${token.colorBorder}`,
  };

  return { siderStyle, sidebarGridStyle } satisfies Record<
    string,
    React.CSSProperties
  >;
};

export const MenuLayout = ({
  TopComponent,
  BottomComponent,
  CenterComponent,
  collapsedState = "icons",
  ...props
}: Props) => {
  const { siderStyle, sidebarGridStyle } = useStyles();
  return (
    <AntdSider
      trigger={null}
      collapsible
      collapsed={collapsedState === "icons"}
      theme="light"
      collapsedWidth={collapsedState === "hide" ? 0 : SIDER_COLLAPSED_WIDTH}
      width={collapsedState === "hide" ? 0 : undefined}
      style={siderStyle}
      {...props}
    >
      <div style={sidebarGridStyle}>
        <div style={{ minWidth: 0 }}>{TopComponent}</div>
        <div style={{ minWidth: 0 }}>{CenterComponent}</div>
        <div style={{ minWidth: 0 }}>{BottomComponent}</div>
      </div>
    </AntdSider>
  );
};

export const MenuIconsLayout = ({ children }: PropsWithChildren) => (
  <div
    style={{
      display: "grid",
      rowGap: 10,
      justifyContent: "center",
    }}
  >
    {children}
  </div>
);
