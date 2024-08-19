import { Button } from "@/components/ui/button";
import { Text, Title, Typography } from "@/components/ui/typography";
import { PURPLE_PRIMARY } from "@/styles/colors";
import { theme } from "antd";
import { CSSProperties, PropsWithChildren, ReactNode } from "react";

type Props = PropsWithChildren<{
  title: string;
  icon?: React.ReactNode;
  isGreyedOut?: boolean;
}>;
export const SideCardSubtitle = ({
  title,
  children,
  icon,
  isGreyedOut,
}: Props) => {
  const { token } = theme.useToken();
  return (
    <Typography
      style={{ ...(isGreyedOut && { color: token.colorTextTertiary }) }}
    >
      <Title
        level={5}
        style={{
          display: "flex",
          alignItems: "center",
          ...(isGreyedOut && { color: token.colorTextTertiary }),
        }}
      >
        {!!icon && <span style={{ paddingRight: 8 }}>{icon}</span>}
        {title}
      </Title>
      {children}
    </Typography>
  );
};

export const ButtonAi = ({
  Icon,
  title,
}: {
  title: string;
  Icon: (props: { style: CSSProperties }) => ReactNode;
}) => {
  return (
    <Button
      type="text"
      style={{ paddingLeft: 0, width: "fit-content" }}
      icon={<Icon style={{ color: PURPLE_PRIMARY }} />}
    >
      {title}
    </Button>
  );
};
