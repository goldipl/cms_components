import { AvatarProps, Avatar as AntdAvatar } from "antd";

interface Props extends AvatarProps {}

export const Avatar = (props: Props) => {
  return <AntdAvatar {...props} />;
};
