import React, {
  useContext,
  useEffect,
  useState,
  FC,
  CSSProperties,
  PropsWithChildren,
} from "react";
import { Card, theme, Grid, GlobalToken } from "antd";
import { Button } from "@/components/ui/button";
import {
  EyeOutlined,
  DesktopOutlined,
  MobileOutlined,
} from "@icons/antd-icons";
import { ShareForwardLine } from "@icons/share-forward-line";
import { Cloudy2Line } from "@icons/cloudy-2-line";
import { GridBox } from "@/components/ui/grid-box";
import { Segmented } from "@/components/ui/segmented";
import { Layout } from "@/components/ui/layouts";
import { useFormContext } from "react-hook-form";

interface Props {
  setViewport: (viewport: "desktop" | "mobile") => void;
}
export const ArticleEditTopbar = ({ setViewport }: Props) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();
  return (
    <Layout.TopbarLayout
      LeftComponent={<Button size="small">Roboczy</Button>}
      CenterComponent={
        <Segmented<"desktop" | "mobile">
          size="large"
          bgColor="primary"
          options={[
            { label: "Desktop", value: "desktop", icon: <DesktopOutlined /> },
            { label: "Mobile", value: "mobile", icon: <MobileOutlined /> },
          ]}
          onChange={setViewport}
        />
      }
      RightComponent={
        <GridBox
          justifySelf="end"
          gridTemplateColumns="repeat(4, auto)"
          gap={10}
        >
          <Button type="text" icon={<Cloudy2Line />} />
          <Button type="primary" icon={<ShareForwardLine />} ghost />
          <Button type="primary" icon={<EyeOutlined />} ghost />
          <Button
            type="primary"
            htmlType="submit"
            style={{ marginLeft: 10 }}
            loading={isSubmitting}
          >
            Publikuj
          </Button>
        </GridBox>
      }
    />
  );
};
