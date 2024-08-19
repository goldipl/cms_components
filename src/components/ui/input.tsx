import { ErrorText, Paragraph, Text } from "@/components/ui/typography";
import { PRIMARY_LIGHT } from "@/styles/colors";
import {
  Input as AntdInput,
  ConfigProvider,
  ConfigProviderProps,
  GetProps,
  GetRef,
  Typography,
} from "antd";
import { forwardRef } from "react";
interface Props extends GetProps<typeof AntdInput> {
  label?: string;
}

const theme: ConfigProviderProps["theme"] = {
  token: {
    colorPrimary: PRIMARY_LIGHT,
  },
  components: {
    Input: {
      activeBorderColor: PRIMARY_LIGHT,
      hoverBorderColor: PRIMARY_LIGHT,
    },
  },
};

export const Input = ({ label, ...props }: Props) => {
  return (
    <ConfigProvider theme={theme}>
      {label ? (
        <div>
          <Typography>{label}</Typography>
          <AntdInput {...props} />
        </div>
      ) : (
        <AntdInput {...props} />
      )}
    </ConfigProvider>
  );
};

const { Group, Search, Password } = AntdInput;

type Ref = GetRef<typeof AntdInput>;
interface TextAreaProps extends GetProps<typeof AntdInput.TextArea> {
  label?: string;
  error?: string;
}
export const TextArea = forwardRef<Ref, TextAreaProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div>
        {!!label && (
          <Typography>
            <Text>{label}</Text>
          </Typography>
        )}
        <AntdInput.TextArea {...props} ref={ref} />
        {!!error && <ErrorText error={error} />}
      </div>
    );
  }
);

export { Group, Search, Password };
