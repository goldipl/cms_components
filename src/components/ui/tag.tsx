import { Typography } from "@/components/ui/typography";
import { purple } from "@ant-design/colors";
import { Tag as AntdTag, GetProps, ConfigProvider, theme, Flex } from "antd";
import { CSSProperties, PropsWithChildren } from "react";
interface Props extends GetProps<typeof AntdTag> {
  fontWeight?: CSSProperties["fontWeight"];
}

export const Tag = ({ children, fontWeight, ...props }: Props) => {
  const { token } = theme.useToken();
  return (
    <ConfigProvider theme={{ token: { colorBorder: "#5B93E285" } }}>
      <AntdTag {...props}>
        <Typography style={{ fontWeight, display: "inline-block" }}>
          {children}
        </Typography>
      </AntdTag>
    </ConfigProvider>
  );
};

export const TagWrapper = ({ children }: PropsWithChildren) => (
  <Flex gap="8px 0" wrap>
    {children}
  </Flex>
);

const { CheckableTag } = AntdTag;

export { CheckableTag };
