import React, {
  useContext,
  useEffect,
  useState,
  FC,
  CSSProperties,
  PropsWithChildren,
  ReactNode,
} from "react";
import { Card, theme, Grid, GlobalToken, Layout } from "antd";
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
import { HEADER_HEIGHT } from "@/features/article/edit-article/components/constants";
const { Header } = Layout;

interface Props {
  LeftComponent?: ReactNode;
  CenterComponent?: ReactNode;
  RightComponent?: ReactNode;
}
export const TopbarLayout = ({
  CenterComponent,
  LeftComponent,
  RightComponent,
}: Props) => {
  return (
    <Header
      style={{
        padding: 0,
        height: HEADER_HEIGHT,
      }}
    >
      <GridBox
        width="100%"
        height="100%"
        gridTemplateColumns="1fr auto 1fr"
        background={(t) => t.colorBgContainer}
        padding="0 20px"
        alignItems="center"
        justifyItems="end"
        borderBottom={(t) => `1px solid ${t.colorBorder}`}
        boxShadow={(t) => t.boxShadowTertiary}
      >
        <GridBox justifySelf="start">{LeftComponent}</GridBox>
        <GridBox justifySelf="start">{CenterComponent}</GridBox>
        <GridBox justifySelf="end">{RightComponent}</GridBox>
      </GridBox>
    </Header>
  );
};
