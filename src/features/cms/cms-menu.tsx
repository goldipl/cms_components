import React, { useContext, useEffect, useState, FC } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "@tanstack/react-router";

import { Avatar } from "antd";
import { useRootStore } from "@/store/store";
import { Layout } from "@/components/ui/layouts";
import {
  FormOutlined,
  InsertRowAboveOutlined,
  LayoutOutlined,
  UnorderedListOutlined,
} from "@icons/antd-icons";
import Icon from "@ant-design/icons";
import { Menu } from "@/components/ui/menu";

type MenuItem = Required<MenuProps>["items"][number];
const items: MenuItem[] = [
  { key: "1", icon: <LayoutOutlined />, label: "Option 1" },
  { key: "2", icon: <FormOutlined />, label: "Option 2" },
  { key: "3", icon: <UnorderedListOutlined />, label: "Option 3" },
  {
    key: "4",
    label: "Navigation One",
    icon: <InsertRowAboveOutlined />,
  },
];

export interface Props {}

export const CmsMenu: FC<Props> = ({}) => {
  const { menuCollapseState, showMenu } = useRootStore();
  const { setPath, path } = useRootStore();

  return (
    <Layout.MenuLayout
      aria-label="cms-menu"
      collapsedState={!showMenu ? "hide" : menuCollapseState}
      TopComponent={
        <Layout.MenuIconsLayout>
          <Avatar
            style={{
              background: path === 1 ? "green" : undefined,
            }}
            shape="square"
            size="large"
            onClick={() => setPath(1)}
          >
            SE
          </Avatar>
          <Avatar
            style={{
              background: path === 2 ? "green" : undefined,
            }}
            shape="square"
            size="large"
            onClick={() => setPath(2)}
          >
            VX
          </Avatar>
          <Avatar
            style={{
              background: path === 3 ? "green" : undefined,
            }}
            shape="square"
            size="large"
            onClick={() => setPath(3)}
          >
            ES
          </Avatar>
          <Avatar
            style={{
              background: path === 4 ? "green" : undefined,
            }}
            shape="square"
            size="large"
            onClick={() => setPath(4)}
          >
            XD
          </Avatar>
        </Layout.MenuIconsLayout>
      }
      CenterComponent={<Menu items={items} keepSelectedTextColor />}
      BottomComponent={<Avatar size="large">U</Avatar>}
    />
  );
};
