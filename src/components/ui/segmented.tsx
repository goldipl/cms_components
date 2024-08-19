import { PRIMARY_LIGHT } from "@/styles/colors";
import {
  SegmentedProps,
  Segmented as AntdSegmented,
  theme,
  ConfigProvider,
  GetProps,
} from "antd";

interface Props<T> extends SegmentedProps<T> {
  bgColor?: "primary" | "default";
}

export const Segmented = <T,>({ bgColor, ...props }: Props<T>) => {
  const { token } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        token: {
          ...(bgColor === "primary" && { colorBgLayout: token.colorPrimaryBg }),
        },
      }}
    >
      <AntdSegmented<T> {...props} style={{ fontWeight: 600 }} />
    </ConfigProvider>
  );
};
