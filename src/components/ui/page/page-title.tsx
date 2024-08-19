import { PAGE_CONTENT_PADDING } from "@/modules/core/constants";
import { Col, Flex, Row, Typography } from "antd";
import { PropsWithChildren, ReactNode } from "react";
const { Title } = Typography;
export interface Props {
  title: string;
  RightSideComponent?: ReactNode;
}

export const PageTitle = ({ title, RightSideComponent }: Props) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr auto",
        alignItems: "center",
        marginBottom: 48,
      }}
    >
      <Typography>
        <Title style={{ margin: 0 }}>{title}</Title>
      </Typography>
      {RightSideComponent}
    </div>
  );
};

export const PageSubtitle = ({ title }: { title: string }) => {
  return (
    <Typography
      style={{
        marginBottom: 18,
      }}
    >
      <Title level={5} style={{ margin: 0 }} type="secondary">
        {title}
      </Title>
    </Typography>
  );
};
