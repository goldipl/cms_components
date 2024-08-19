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

export const LeftSidePanel = ({
  children,
  onClose,
  show,
  title,
}: PropsWithChildren<{
  onClose: () => void;
  show: boolean;
  title: ReactNode;
}>) => {
  const { token } = theme.useToken();

  return (
    <div
      style={{
        height: "100%",
        transition: "margin-left 0.3s ease-in-out, opacity 0.3s ease-in-out",
        marginLeft: show ? 0 : -(DRAWER_WIDTH + 20),
        width: DRAWER_WIDTH,
        boxShadow: token.boxShadowSecondary,
      }}
    >
      <Card
        style={{
          width: "100%",
          height: "100%",
          overflow: "auto",
        }}
        title={title}
        extra={
          <Button
            shape="circle"
            type="text"
            icon={<CloseOutlined />}
            onClick={onClose}
            style={{ color: token.colorIcon }}
          />
        }
        styles={{ header: { border: "none" } }}
      >
        {children}
      </Card>
    </div>
  );
};
