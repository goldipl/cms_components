import {
  Typography as AntdTypography,
  ConfigProvider,
  GetProps,
  theme,
  ThemeConfig,
} from "antd";
import { AliasToken } from "antd/es/theme/internal";

type TextColors = {
  [P in keyof AliasToken]: P extends `colorText${string}` ? P : never;
};
type TextColorsKeys = TextColors[keyof TextColors];
interface Props extends GetProps<typeof AntdTypography> {
  color?: TextColorsKeys;
}

export const Typography = ({ style, color, ...props }: Props) => {
  const { token } = theme.useToken();
  return (
    <AntdTypography
      {...props}
      style={{
        ...(color && { color: token[color] }),
        ...style,
      }}
    />
  );
};

export const ErrorText = ({ error }: { error: string }) => (
  <Text type="danger" style={{}}>
    {error}
  </Text>
);

const { Link, Paragraph, Text, Title: AntdTitle } = AntdTypography;
export const Title = (
  props: GetProps<typeof AntdTitle> & { disabled?: boolean }
) => {
  return <AntdTitle {...props} />;
};

export { Link, Paragraph, Text };
