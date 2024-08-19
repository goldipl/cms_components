import { CmsLayout } from "@/features/cms/cms-layout";
import {
  ArticleEditContent,
  ArticleEditMenuKeys,
  ArticleEditTopbar,
} from "@/features/article/edit-article/components";
import {
  PropsWithChildren,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from "react";
import {
  InformationOption,
  PreviewOption,
} from "@/features/article/edit-article/menu-side-cards";
import { PageContainer } from "@/components/ui/page/page-container";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CloseOutlined } from "@icons/antd-icons";
import { Title, Typography } from "@/components/ui/typography";
import { on } from "events";
import { DRAWER_WIDTH } from "@/features/article/edit-article/components/constants";
import { Spin, theme } from "antd";
import { createContext } from "@/utils/create-context";
import {
  LeftPanel,
  MenuSidebar,
  SideNavigationProvider,
} from "@/features/article/edit-article/side-navigation";
import { Layout } from "@/components/ui/layouts";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateArticleMutation } from "@/api/article/create-article";
import { useFetchArticleQuery } from "@/api/article";

export interface Props {}
export interface FormValues {
  title: string;
  slug: string;
  paragraph: string;
  previewTitle: string;
}
const defaultValues: FormValues = {
  title: "",
  slug: "",
  paragraph: "",
  previewTitle: "",
};
const schema = yup
  .object({
    title: yup.string().required(),
    slug: yup.string().required(),
    previewTitle: yup.string().required(),
  })
  .required();

export const EditArticle = ({}: Props) => {
  // const [formValues, setFormValues] = useState<FormValues>({
  //   paragraph: "",
  //   slug: "",
  //   title: "",
  //   previewTitle: "",
  // });
  const { data, isLoading, isSuccess, refetch, isFetched, isFetching } =
    useFetchArticleQuery(1);
  // const [isLoading, setIsLoading] = useState(true);
  const [viewport, setViewport] = useState<"desktop" | "mobile">("desktop");
  const width = {
    desktop: 610,
    mobile: 360,
  }[viewport];

  const methods = useForm({
    defaultValues,
    resolver: yupResolver(schema),
    mode: "onChange",
  });
  const createArticle = useCreateArticleMutation();

  const onSubmit: Parameters<(typeof methods)["handleSubmit"]>[0] = async (
    data
  ) => {
    console.log("submit", data);
    return createArticle.mutateAsync(data, {
      onSuccess: (data) => {
        methods.reset(data.data);
        // alert(data.data.title);
      },
    });
  };

  const onFail: Parameters<(typeof methods)["handleSubmit"]>[1] = async (
    data
  ) => {
    console.log("FAIL", data);
  };

  useEffect(() => {
    if (!isSuccess || isFetching) return;
    console.log("debug-log-set data");
    methods.reset(data);
  }, [isSuccess, isFetching]);

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit, onFail)}>
        <SideNavigationProvider>
          <Layout
            TopBarComponent={<ArticleEditTopbar setViewport={setViewport} />}
            MenuComponent={<MenuSidebar />}
            LeftPanelComponent={<LeftPanel />}
          >
            <PageContainer>
              <div
                style={{
                  width,
                  margin: "auto",
                  transition: "width .2s ease-in-out",
                }}
              >
                <Spin spinning={isLoading}>
                  <Button onClick={refetch}>refetch</Button>
                  <ArticleEditContent />
                  {/* <ArticleEditContent />
                  <ArticleEditContent />
                  <ArticleEditContent />
                  <ArticleEditContent /> */}
                </Spin>
              </div>
            </PageContainer>
          </Layout>
        </SideNavigationProvider>
      </form>
    </FormProvider>
  );
};
