import { Menu as AntdMenu, GetProps, ConfigProvider, theme } from "antd";
interface Props
  extends Pick<
    GetProps<typeof AntdMenu>,
    "items" | "selectedKeys" | "onClick"
  > {
  keepSelectedTextColor?: boolean;
}

export const Menu = ({ keepSelectedTextColor, items, ...props }: Props) => {
  const { token } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        components: {
          Menu: {
            ...(keepSelectedTextColor && {
              itemSelectedColor: token.colorText,
            }),
          },
        },
      }}
    >
      <AntdMenu items={items} {...props} />
    </ConfigProvider>
  );
};

const { Divider, Item, ItemGroup, SubMenu } = AntdMenu;

export { Divider, Item, ItemGroup, SubMenu };
