import { Layout as AntdLayout } from "antd";
import { PropsWithChildren } from "react";

type Props = PropsWithChildren<{
  MenuComponent?: React.ReactNode;
  LeftPanelComponent?: React.ReactNode;
  TopBarComponent?: React.ReactNode;
}>;

export const Layout = ({
  MenuComponent,
  LeftPanelComponent,
  TopBarComponent,
  children,
}: Props) => {
  return (
    <AntdLayout
      style={{
        position: "relative",
        height: "100vh",
        display: "grid",
        gridTemplateAreas: `
        "main-menu top-bar top-bar"
        "main-menu side-bar content"
        `,
        gridTemplateColumns:
          "minmax(0, min-content) minmax(0, min-content) 1fr",
        gridTemplateRows: "minmax(0px, min-content) 1fr",
      }}
    >
      <div
        style={{
          gridArea: "main-menu",
          position: "sticky",
          zIndex: 1,
          overflow: "auto",
        }}
      >
        {MenuComponent}
      </div>
      <div style={{ gridArea: "top-bar", height: "fit-content" }}>
        {TopBarComponent}
      </div>
      <div
        style={{
          gridArea: "side-bar",
          position: "sticky",
          overflow: "auto",
        }}
      >
        {LeftPanelComponent}
      </div>
      <div
        style={{
          gridArea: "content",
          overflow: "auto",
          height: "100%",
        }}
      >
        {children}
      </div>
    </AntdLayout>
  );
};
