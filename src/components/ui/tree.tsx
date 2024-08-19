import { blue } from "@ant-design/colors";
import { Tree as AntdTree, GetProps, ConfigProvider, theme } from "antd";
interface Props extends GetProps<typeof AntdTree> {}

export const Tree = (props: Props) => {
  const { token } = theme.useToken();
  return (
    <ConfigProvider theme={{ token: { colorPrimary: "#5B93E2" } }}>
      <AntdTree {...props} />
    </ConfigProvider>
  );
};
export const DirectoryTree = (
  props: GetProps<typeof AntdTree.DirectoryTree>
) => {
  const { token } = theme.useToken();
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#5B93E2",
        },
      }}
    >
      <AntdTree.DirectoryTree {...props} />
    </ConfigProvider>
  );
};
const { TreeNode } = AntdTree;

export { TreeNode };
