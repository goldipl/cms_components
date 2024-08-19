import { Button } from "@/components/ui/button";
import { useRootStore } from "@/store/store";
import { CloseCircleFilled } from "@ant-design/icons";
import { SidebarFoldLineIcon } from "@icons/sidebar-fold-line";
import { SidebarUnfoldLineIcon } from "@icons/sidebar-unfold-line";
import { ReactNode } from "react";

interface Props {}

const MenuActionButton = ({
  Icon,
  onClick,
  ...props
}: {
  Icon: ReactNode;
  onClick: () => void;
}) => {
  return (
    <Button
      type="text"
      size="large"
      shape="circle"
      onClick={onClick}
      icon={Icon}
      {...props}
    />
  );
};

export const ToggleMenuButton = () => {
  const { showMenu, toggleShowMenu } = useRootStore();
  return (
    <MenuActionButton
      aria-label="toggle-menu-button"
      Icon={showMenu ? <SidebarFoldLineIcon /> : <SidebarUnfoldLineIcon />}
      onClick={() => toggleShowMenu(!showMenu)}
    />
  );
};

export const CloseArticleButton = () => {
  return <MenuActionButton Icon={<CloseCircleFilled />} onClick={() => {}} />;
};
