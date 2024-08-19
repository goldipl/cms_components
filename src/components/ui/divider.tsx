import { Divider as AntdDivider, ConfigProvider, GetProps, theme } from "antd";
interface Props extends GetProps<typeof AntdDivider> {}

export const Divider = (props: Props) => {
  const { token } = theme.useToken();

  return (
    <ConfigProvider
      theme={{ token: { colorBorderSecondary: token.colorPrimaryBg } }}
    >
      <AntdDivider {...props} />
    </ConfigProvider>
  );
};
