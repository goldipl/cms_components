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

export const KanbanColumnHeader = ({
  title,
  color,
  counter,
  onClick,
  invertTextColor,
}: {
  title: string;
  color: string;
  counter: number;
  invertTextColor?: boolean;
  onClick: () => void;
}) => {
  const { token } = theme.useToken();

  return (
    <GridBox
      gridTemplateColumns="auto 1fr auto"
      background={color}
      justifyItems="center"
      alignItems="center"
      paddingLeft={10}
      gap={10}
      borderRadius={4}
      width="100%"
    >
      <div
        style={{
          background: "#fff",
          fontWeight: "bold",
          lineHeight: "18px",
          height: 18,
          padding: "0 6px",
          display: "flex",
          alignContent: "center",
          justifyContent: "center",
          borderRadius: 3,
        }}
      >
        {counter}
      </div>
      <Typography.Text
        style={{
          justifySelf: "self-start",
          color: invertTextColor ? token.colorTextLightSolid : undefined,
        }}
      >
        {title}
      </Typography.Text>
      <Button
        type="text"
        onClick={onClick}
        icon={<PlusOutlined />}
        ghost
        size="middle"
        style={{
          color: invertTextColor ? token.colorTextLightSolid : undefined,
        }}
      />
    </GridBox>
  );
};
