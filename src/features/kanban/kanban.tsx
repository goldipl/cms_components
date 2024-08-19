import { PageSubtitle, PageTitle } from "@/components/ui/page/page-title";
import { GridBox } from "@/components/ui/grid-box";
import { PAGE_CONTENT_PADDING } from "@/constants";
import {
  Avatar,
  Card,
  Col,
  Grid,
  Row,
  Segmented,
  theme,
  Tooltip,
  Typography,
} from "antd";
import {
  CheckCircleOutlined,
  UsergroupAddOutlined,
  FileSyncOutlined,
  EditOutlined,
  VideoCameraOutlined,
  PictureOutlined,
  UserOutlined,
  PictureFilled,
  PlusOutlined,
} from "@icons/antd-icons";
import { ActionIconButton, Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { KanbanArticleCard } from "@/features/kanban/components/kanban-article-card";
import { KanbanColumnHeader } from "@/features/kanban/components/kanban-column-header";
import { ReactNode } from "react";
import { generateMockData } from "@/features/kanban/mocks";
import { useStore } from "zustand";
import { useRootStore } from "@/store/store";

const GRID_GAP = 20;

interface Props {}

export const KanbanColumn = ({
  HeaderComponent,
  ArticleComponents,
}: {
  HeaderComponent: ReactNode;
  ArticleComponents: ReactNode[];
}) => {
  return (
    <Col md={6}>
      {HeaderComponent}
      <GridBox paddingTop={GRID_GAP} gap={GRID_GAP / 2}>
        {ArticleComponents}
      </GridBox>
    </Col>
  );
};

export const Kanban = (props: Props) => {
  const { token } = theme.useToken();
  const { toggleShowMenu, showMenu, toggleCollapseState } = useRootStore();
  return (
    <>
      <GridBox
        paddingTop={PAGE_CONTENT_PADDING}
        paddingRight={PAGE_CONTENT_PADDING}
        paddingLeft={PAGE_CONTENT_PADDING}
        paddingBottom={GRID_GAP}
        borderBottom={(token) => `1px solid ${token.colorBorder}`}
      >
        <PageTitle title="Lista artykułów" />
        <PageSubtitle title="Kanban" />
        <Segmented
          size="large"
          options={[
            {
              label: "Status",
              value: "status",
              icon: <CheckCircleOutlined />,
            },
            {
              label: "Przypisane",
              value: "users",
              icon: <UsergroupAddOutlined />,
            },
            {
              label: "Zaległe",
              value: "sync",
              icon: <FileSyncOutlined />,
            },
          ]}
          style={{ width: "fit-content" }}
        />
      </GridBox>
      <Button onClick={() => toggleShowMenu(!showMenu)}>show/hide menu</Button>
      <Button onClick={() => toggleCollapseState()}>collapse menu</Button>
      <GridBox
        background={(t) => t.colorBgContainerDisabled}
        paddingTop={GRID_GAP}
        paddingLeft={PAGE_CONTENT_PADDING}
        paddingRight={PAGE_CONTENT_PADDING}
        paddingBottom={PAGE_CONTENT_PADDING}
      >
        <Row gutter={GRID_GAP}>
          <KanbanColumn
            HeaderComponent={
              <KanbanColumnHeader
                color={token.colorTextDisabled}
                counter={3}
                title="Pomysł na materiał"
              />
            }
            ArticleComponents={generateMockData(3).map((article) => (
              <KanbanArticleCard
                title={article.title}
                subtitle={article.subtitle}
                image={article.image}
                editors={article.editors}
                actions={article.actions}
              />
            ))}
          />
          <KanbanColumn
            HeaderComponent={
              <KanbanColumnHeader
                color={token.colorPrimary}
                counter={2}
                title="Roboczy"
                invertTextColor
              />
            }
            ArticleComponents={generateMockData(2).map((article) => (
              <KanbanArticleCard
                title={article.title}
                subtitle={article.subtitle}
                image={article.image}
                editors={article.editors}
                actions={article.actions}
              />
            ))}
          />
          <KanbanColumn
            HeaderComponent={
              <KanbanColumnHeader
                color={token.colorWarning}
                counter={2}
                title="Do weryfikacji"
              />
            }
            ArticleComponents={generateMockData(6).map((article) => (
              <KanbanArticleCard
                title={article.title}
                subtitle={article.subtitle}
                image={article.image}
                editors={article.editors}
                actions={article.actions}
              />
            ))}
          />
          <KanbanColumn
            HeaderComponent={
              <KanbanColumnHeader
                color={token.colorSuccess}
                counter={2}
                title="Opublikowany"
                invertTextColor
              />
            }
            ArticleComponents={generateMockData(1).map((article) => (
              <KanbanArticleCard
                title={article.title}
                subtitle={article.subtitle}
                image={article.image}
                editors={article.editors}
                actions={article.actions}
              />
            ))}
          />
        </Row>
      </GridBox>
    </>
  );
};
