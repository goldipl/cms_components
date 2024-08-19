import { Layout as InternalLayout } from "./layout";
import { LeftSidePanel } from "./left-side-panel";
import { TopbarLayout } from "./topbar-layout";
import { MenuIconsLayout, MenuLayout } from "./menu-layout";

type CompoundedComponent = typeof InternalLayout & {
  LeftSidePanel: typeof LeftSidePanel;
  TopbarLayout: typeof TopbarLayout;
  MenuIconsLayout: typeof MenuIconsLayout;
  MenuLayout: typeof MenuLayout;
};

export const Layout = InternalLayout as CompoundedComponent;
Layout.LeftSidePanel = LeftSidePanel;
Layout.TopbarLayout = TopbarLayout;
Layout.MenuLayout = MenuLayout;
Layout.MenuIconsLayout = MenuIconsLayout;
