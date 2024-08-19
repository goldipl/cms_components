import React, { useState } from "react";
import { blue } from "@ant-design/colors";
import {
  DashboardSidebar,
  MenuDashboard,
} from "@/modules/core/components/DashboardLayout/DashboardSidebar";
import { Sider } from "@/modules/core/design-system/Sider";
import { useRootStore } from "@/store/store";
import { CmsMenu } from "@/features/cms/cms-menu";
import { Layout } from "@/components/ui/layouts";
const { Content } = Layout;

interface Props {
  children: React.ReactNode | React.ReactNode[];
}
export const CmsLayout = ({ children }: Props) => {
  return <Layout MenuComponent={<CmsMenu />}>{children}</Layout>;
};
