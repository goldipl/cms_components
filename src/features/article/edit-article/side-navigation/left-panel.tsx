import { CmsLayout } from "@/features/cms/cms-layout";
import {
  ArticleEditContent,
  ArticleEditLayout,
  ArticleEditSidebar,
  ArticleEditTopbar,
} from "@/features/article/edit-article/components";
import { PropsWithChildren, ReactNode, useMemo, useState } from "react";
import {
  InformationOption,
  PreviewOption,
  SeoOption,
  VersionHistoryOption,
  CategoriesOption,
  SettingsOption,
} from "@/features/article/edit-article/menu-side-cards";
import { PageContainer } from "@/components/ui/page/page-container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CloseOutlined, InfoCircleOutlined } from "@icons/antd-icons";
import { Title, Typography } from "@/components/ui/typography";
import { on } from "events";
import { DRAWER_WIDTH } from "@/features/article/edit-article/components/constants";
import { Flex, Grid, theme, Tooltip } from "antd";
import { createContext } from "@/utils/create-context";
import {
  ArticleEditSideNavigationProvider,
  SideNavigationContextProvider,
  useArticleEditSideNavigationContext,
  useSideNavigationContext,
} from "@/features/article/edit-article/side-navigation/side-navigation.context";
import { ArticleEditMenuKeys } from "@/features/article/edit-article/side-navigation/menu-sidebar";
import { GridBox } from "@/components/ui/grid-box";
import { Layout } from "@/components/ui/layouts";

export const LeftPanel = ({ children }: PropsWithChildren) => {
  const { token } = theme.useToken();
  const { showSidePanel, menuKey, closeMenu } = useSideNavigationContext();

  const items: Record<
    ArticleEditMenuKeys,
    {
      title: string;
      tooltip?: string;
      component: ReactNode;
    }
  > = {
    info: {
      title: "Information",
      component: <InformationOption />,
      tooltip: "Informacje o artykule",
    },
    preview: {
      title: "Zajawka",
      component: <PreviewOption />,
    },
    seo: {
      title: "SEO",
      component: <SeoOption />,
      tooltip: "Optymalizacja dla wyszukiwarek",
    },
    categories: {
      title: "Kategorie",
      component: <CategoriesOption />,
    },
    social: {
      title: "Społeczności",
      component: null,
    },
    authors: {
      title: "Autorzy",
      component: null,
    },
    "version-history": {
      title: "Historia wersji",
      component: <VersionHistoryOption />,
    },
    settings: {
      title: "Ustawienia",
      component: <SettingsOption />,
    },
  };

  return (
    <Layout.LeftSidePanel
      show={showSidePanel}
      onClose={closeMenu}
      title={items[menuKey]?.title}
    >
      {items[menuKey]?.component}
    </Layout.LeftSidePanel>
  );
};
