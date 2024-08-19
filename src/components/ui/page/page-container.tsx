import { PAGE_CONTENT_PADDING } from "@/constants";
import { condition } from "@/utils";
import { Col, Flex, Row, theme, Typography } from "antd";
import { PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  TitleComponent?: ReactNode;
  SubtitleComponent?: ReactNode;
  backgroundColor?: "base";
  fullHeight?: boolean;
}>;
export const PageContainer = ({
  TitleComponent,
  SubtitleComponent,
  children,
  fullHeight,
  backgroundColor,
}: Props) => {
  const { token } = theme.useToken();
  return (
    <Row
      style={{
        padding: PAGE_CONTENT_PADDING,
        backgroundColor: condition(
          backgroundColor === "base",
          token.colorBgBase
        ),
        ...(fullHeight && { minHeight: "100%" }),
      }}
    >
      {!!TitleComponent && <Col xs={24}>{TitleComponent}</Col>}
      {!!SubtitleComponent && <Col xs={24}>{SubtitleComponent}</Col>}
      <Col xs={24}>{children}</Col>
    </Row>
  );
};
