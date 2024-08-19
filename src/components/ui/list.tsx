import {
  List as AntdList,
  GetProps,
  ConfigProvider,
  theme,
  ListProps,
} from "antd";

interface Props<T> extends ListProps<T> {}

export const List = <T,>(props: Props<T>) => {
  const { token } = theme.useToken();
  return (
    <ConfigProvider theme={{ token: {} }}>
      <AntdList<T> {...props} />
    </ConfigProvider>
  );
};

const { Item } = AntdList;

export { Item };
