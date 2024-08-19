import Icon from "@ant-design/icons";
import { CustomIconComponentProps } from "@ant-design/icons/lib/components/Icon";
import { ReactNode } from "react";

export const withIconWrapper =
  (SvgComponent: ReactNode) => (props: Partial<CustomIconComponentProps>) =>
    <Icon component={() => SvgComponent} {...props} />;
