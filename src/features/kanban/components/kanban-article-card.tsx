import { PageSubtitle, PageTitle } from "@/components/ui/page/page-title";
import { GridBox } from "@/components/ui/grid-box";
import { PAGE_CONTENT_PADDING } from "@/constants";
import { Avatar, Segmented, Tooltip } from "antd";
import {
  CheckCircleOutlined,
  UsergroupAddOutlined,
  FileSyncOutlined,
  EditOutlined,
  VideoCameraOutlined,
  PictureOutlined,
  UserOutlined,
  PictureFilled,
} from "@icons/antd-icons";
import { ActionIconButton, Button } from "@/components/ui/button";
import { Image } from "@/components/ui/image";
import { Card, Meta } from "@/components/ui/card";

const CARD_PADDING = 12;

export const KanbanArticleCard = ({
  subtitle,
  title,
  image,
  editors,
  actions,
}: {
  image?: string;
  title: string;
  subtitle: string;
  editors: { src?: string; fullName?: string }[];
  actions?: Record<"video" | "image" | "edit", { onClick: () => void }>;
}) => {
  return (
    <Card
      cover={<Image src={image} />}
      styles={{
        body: { padding: CARD_PADDING, paddingBottom: 0 },
        cover: { aspectRatio: 16 / 10 },
      }}
      style={{ width: "100%", height: "fit-content" }}
    >
      <Meta
        title={
          <div
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "initial",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
            }}
          >
            {title}
          </div>
        }
        description={subtitle}
        style={{
          paddingBottom: CARD_PADDING,
        }}
      />
      <GridBox
        borderTop={(t) => `1px solid ${t.colorBorder}`}
        paddingTop={CARD_PADDING - 8}
        paddingBottom={CARD_PADDING - 8}
        gridTemplateColumns={"auto auto"}
      >
        <Avatar.Group>
          {editors?.map((editor) => (
            <Tooltip title={editor.fullName} placement="top">
              <Avatar
                style={{ backgroundColor: "#87d068" }}
                src={editor.src}
                icon={!editor.fullName ? <UserOutlined /> : undefined}
              >
                {editor.fullName?.slice(0, 1)}
              </Avatar>
            </Tooltip>
          ))}
        </Avatar.Group>
        <GridBox justifySelf="end" gridTemplateColumns="repeat(3, auto)">
          {actions?.video && (
            <ActionIconButton icon={<VideoCameraOutlined />} />
          )}
          {actions?.image && <ActionIconButton icon={<PictureOutlined />} />}
          {actions?.edit && <ActionIconButton icon={<EditOutlined />} />}
        </GridBox>
      </GridBox>
    </Card>
  );
};
