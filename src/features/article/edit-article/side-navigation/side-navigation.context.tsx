import { ArticleEditMenuKeys } from "@/features/article/edit-article/side-navigation";
import { createContext } from "@/utils/create-context";
import { PropsWithChildren, useMemo, useState } from "react";

interface SideNavigationContextValue {
  showSidePanel: boolean;
  setShowSidePanel: (show: boolean) => void;
  onClickMenuItem: (k: ArticleEditMenuKeys) => void;
  closeMenu: () => void;
  menuKey: ArticleEditMenuKeys;
}
const [useSideNavigationContext, Provider] =
  createContext<SideNavigationContextValue>("SideNavigationContext");

export const SideNavigationProvider = ({ children }: PropsWithChildren) => {
  const [showSidePanel, setShowSidePanel] = useState(false);
  const [menuKey, setMenuKey] = useState<ArticleEditMenuKeys>();

  const value: SideNavigationContextValue = useMemo(
    () => ({
      showSidePanel,
      setShowSidePanel,
      onClickMenuItem: (k) => {
        setMenuKey(k);
        setShowSidePanel(true);
      },
      closeMenu: () => {
        setShowSidePanel(false);
      },
      menuKey: menuKey as ArticleEditMenuKeys,
    }),
    [showSidePanel, menuKey]
  );

  return <Provider value={value}>{children}</Provider>;
};
export { useSideNavigationContext };
