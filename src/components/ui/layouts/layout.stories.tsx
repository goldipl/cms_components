import type { Meta, StoryObj } from "@storybook/react";
import { Layout } from "./index";
import { condition } from "@/utils";
import { ComponentProps, useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Skeleton } from "antd";
import { PageContainer } from "@/components/ui/page/page-container";
import { produce } from "immer";
const content = (length = 10) =>
  Array.from({ length }).map((_, index) => <Skeleton paragraph key={index} />);

const useButton = (title: string) => {
  const [bool, setBool] = useState(false);
  const onClick = () => setBool((prev) => !prev);
  const Btn = () => <Button onClick={onClick}>{title}</Button>;
  return [bool, Btn, onClick] as const;
};

type PagePropsAndCustomArgs = ComponentProps<typeof Layout> & {
  expandedPanel?: boolean;
  overflowedContent?: boolean;
  overflowedPanel?: boolean;
  withBgColor?: boolean;
  fullHeight?: boolean;
  hideMainMenu?: boolean;
};
type MetaType = Meta<PagePropsAndCustomArgs>;

const meta: MetaType = {
  component: Layout,
  tags: ["visual:check"],
};

export default meta;

const defaultRender: MetaType["render"] = ({
  MenuComponent,
  TopBarComponent,
  overflowedContent,
  withBgColor,
  fullHeight,
}) => {
  return (
    <Layout MenuComponent={MenuComponent} TopBarComponent={TopBarComponent}>
      <PageContainer
        backgroundColor={condition(withBgColor, "base")}
        fullHeight={fullHeight}
      >
        {content(overflowedContent ? 5 : 1)}
      </PageContainer>
    </Layout>
  );
};

const nestedRender: MetaType["render"] = ({
  overflowedContent,
  withBgColor,
  fullHeight,
  hideMainMenu,
  overflowedPanel,
  expandedPanel,
}) => {
  const [show, setShow] = useState(!!expandedPanel);
  useEffect(() => {
    setShow(!!expandedPanel);
  }, [expandedPanel]);
  return (
    <Layout
      MenuComponent={
        <Layout.MenuLayout
          CenterComponent={`menu-1`}
          collapsedState={condition(hideMainMenu, "hide")}
        />
      }
    >
      <Layout
        MenuComponent={<Layout.MenuLayout CenterComponent={`menu-2`} />}
        TopBarComponent={<Layout.TopbarLayout />}
        LeftPanelComponent={
          <Layout.LeftSidePanel
            show={show}
            title="Left Panel"
            onClose={() => setShow(false)}
          >
            {content(overflowedPanel ? 5 : 1)}
          </Layout.LeftSidePanel>
        }
      >
        <PageContainer
          backgroundColor={condition(withBgColor, "base")}
          fullHeight={fullHeight}
        >
          {content(overflowedContent ? 5 : 1)}
        </PageContainer>
      </Layout>
    </Layout>
  );
};

type Story = StoryObj<PagePropsAndCustomArgs>;

export const Default: Story = {
  render: defaultRender,
  args: {
    MenuComponent: <Layout.MenuLayout CenterComponent={`menu-1`} />,
  },
  argTypes: {
    TopBarComponent: { table: { disable: true } },
    MenuComponent: { table: { disable: true } },
  },
};
export const DefaultWithBg: Story = {
  ...Default,
  args: {
    ...Default.args,
    withBgColor: true,
  },
};
export const DefaultFullHeight: Story = {
  ...DefaultWithBg,
  args: {
    ...DefaultWithBg.args,
    fullHeight: true,
  },
};
export const DefaultScrollable: Story = {
  ...DefaultFullHeight,
  args: {
    ...DefaultFullHeight.args,
    overflowedContent: true,
  },
};
export const DefaultWithTopbar: Story = {
  ...DefaultScrollable,
  args: {
    ...DefaultScrollable.args,
    TopBarComponent: <Layout.TopbarLayout />,
  },
  argTypes: {},
};

export const Nested: Story = {
  render: nestedRender,
};
export const NestedScrollable: Story = {
  ...Nested,
  args: {
    ...Nested.args,
    overflowedContent: true,
  },
};
export const NestedWithLeftPanel: Story = {
  ...NestedScrollable,
  args: {
    ...NestedScrollable.args,
    expandedPanel: true,
  },
};
export const NestedWithScrollableLeftPanel: Story = {
  ...NestedWithLeftPanel,
  args: {
    ...NestedWithLeftPanel.args,
    overflowedPanel: true,
  },
};
export const NestedHiddenMainMenu: Story = {
  ...NestedWithScrollableLeftPanel,
  args: {
    ...NestedWithScrollableLeftPanel.args,
    hideMainMenu: true,
  },
};
