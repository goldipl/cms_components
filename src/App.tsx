import { CMSLayout } from "@/modules/core/design-system/layouts/cms/CMSLayout";
import {
  ArticleEdit,
  ArticleEdit2,
  ArticleEdit3,
} from "@modules/article/ArticleEdit/ArticleEdit";
import { blue } from "@ant-design/colors";
import { DashboardLayout } from "@/modules/core/components/DashboardLayout/DashboardLayout";
import { useRootStore } from "@/store/store";
import { Article } from "@/modules/article/ArticleEdit/components/Article";
import { ArticleEditPage } from "@/pages/article-edit-page";
import {
  legacyLogicalPropertiesTransformer,
  StyleProvider,
} from "@ant-design/cssinjs";
import { KanbanIndexPage } from "@/pages/kanban-index-page";
import { CmsLayout } from "@/features/cms/cms-layout";
import { ArticleEditIndexPage } from "@/pages/article-edit-index-page";
import { PRIMARY_LIGHT } from "@/styles/colors";
import { ConfigProvider } from "@/styles/config-provider";
import { Layout } from "@/components/ui/layouts";
import { ActionIconButton } from "@/components/ui/button";
import { SidebarFoldLineIcon } from "@icons/sidebar-fold-line";
import { SidebarUnfoldLineIcon } from "@icons/sidebar-unfold-line";
import { ReactNode } from "react";
import { CloseCircleFilled } from "@ant-design/icons";
import { Button } from "antd";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { server } from "@/config/msw/browser";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const { path } = useRootStore();
  return (
    <ConfigProvider>
      <StyleProvider>
        {/* <CmsLayout>
        
        </CmsLayout> */}
        <CmsLayout>
          <ReactQueryDevtools initialIsOpen={false} />
          {path === 1 && <ArticleEditPage />}
          {path === 2 && <KanbanIndexPage />}
          {path === 3 && <ArticleEditIndexPage />}
        </CmsLayout>
        {/*  {path === 3 && <ArticleEditIndex />}
        {path === 4 && <ArticleEdit3 />} */}
      </StyleProvider>
    </ConfigProvider>
  );
}

export default App;
