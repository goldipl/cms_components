import React, { useContext, useEffect, useState, FC, ReactNode } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "@tanstack/react-router";

import { Button, MenuProps } from "antd";
import {
  MenuLayout,
  MenuIconsLayout,
} from "@/components/ui/layouts/menu-layout";
import { SidebarFoldLineIcon } from "@icons/sidebar-fold-line";
import {
  CloseCircleFilled,
  FolderOpenFilled,
  HistoryOutlined,
  InfoCircleOutlined,
  MonitorOutlined,
  ProfileOutlined,
  SettingOutlined,
  ShareAltOutlined,
  UserSwitchOutlined,
} from "@icons/antd-icons";
import { useRootStore } from "@/store/store";
import { SidebarUnfoldLineIcon } from "@icons/sidebar-unfold-line";
import { useSideNavigationContext } from "@/features/article/edit-article/side-navigation/side-navigation.context";
import { Menu } from "@/components/ui/menu";
import {
  CloseArticleButton,
  ToggleMenuButton,
} from "@/features/article/edit-article/side-navigation/components";
import { useFieldMeta, useFieldsMeta } from "@/hooks/useFieldMeta";

type MenuItem = Required<MenuProps>["items"][number];

const rawItems = [
  { key: "info", icon: <InfoCircleOutlined />, label: "Informacje" },
  { key: "seo", icon: <MonitorOutlined />, label: "SEO" },
  {
    key: "categories",
    label: "Kategorie",
    icon: <FolderOpenFilled />,
  },
  {
    key: "preview",
    label: "Zajawka",
    icon: <ProfileOutlined />,
  },
  {
    key: "social",
    label: "Społeczności",
    icon: <ShareAltOutlined />,
  },
  {
    key: "authors",
    label: "Autorzy",
    icon: <UserSwitchOutlined />,
  },
  {
    key: "versionHistory",
    label: "Historia wersji",
    icon: <HistoryOutlined />,
  },
  {
    key: "settings",
    label: "Ustawienia",
    icon: <SettingOutlined />,
  },
] as const satisfies MenuItem[];

export type ArticleEditMenuKeys = (typeof rawItems)[number]["key"];

interface Props {}

export const MenuSidebar = (props: Props) => {
  const { onClickMenuItem, menuKey, showSidePanel } =
    useSideNavigationContext();

  const meta = useFieldsMeta(["title", "slug", "previewTitle"]);

  const dangerKeys: Partial<Record<ArticleEditMenuKeys, boolean[]>> = {
    seo: [meta.title.isError, meta.slug.isError],
    preview: [meta.previewTitle.isError],
  };

  const items = rawItems.map((field) => ({
    ...field,
    danger: dangerKeys[field.key]?.includes(true),
  }));

  return (
    <MenuLayout
      collapsedState="icons"
      TopComponent={
        <MenuIconsLayout>
          <ToggleMenuButton />
          <CloseArticleButton />
        </MenuIconsLayout>
      }
      CenterComponent={
        <Menu
          items={items}
          selectedKeys={!showSidePanel ? [] : [menuKey]}
          onClick={(e) => onClickMenuItem(e.key as ArticleEditMenuKeys)}
          keepSelectedTextColor
        />
      }
    />
  );
};
