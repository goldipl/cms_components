import { ButtonProps, Button as AntdButton, ConfigProvider } from "antd";
import { ReactNode } from "react";
import { grey } from "@ant-design/colors";
import { ACTION_GREY } from "@/styles/colors";

interface Props extends ButtonProps {}

export const Button = (props: Props) => {
  return <AntdButton {...props} />;
};

export const ActionIconButton = (props: Pick<Props, "icon" | "onClick">) => {
  return (
    <ConfigProvider
      theme={{
        components: {
          Button: {
            defaultGhostColor: ACTION_GREY,
            defaultHoverBorderColor: "transparent",
          },
        },
      }}
    >
      <Button ghost shape="circle" {...props} />
    </ConfigProvider>
  );
};
