import { Layout } from "@/components/ui/layouts";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { MenuLayout } from "./menu-layout";
import { Menu } from "@/components/ui/menu";
import { condition, multiplyMap } from "@/utils";
import { FormOutlined } from "@icons/antd-icons";
import { Avatar } from "@/components/ui/avatar";
import { ItemType } from "antd/es/menu/interface";

type MenuPropsAndCustomArgs = ComponentProps<typeof MenuLayout> & {};

const meta: Meta<MenuPropsAndCustomArgs> = {
  component: MenuLayout,
};

export default meta;

type Story = StoryObj<MenuPropsAndCustomArgs>;

const menuItems = multiplyMap<ItemType>(4, (index) => ({
  title: `Menu {${index}}`,
  key: index,
  icon: <FormOutlined />,
  label: `Menu item ${index}`,
}));
const avatars = (square?: boolean) =>
  multiplyMap(square ? 4 : 1, (index) => (
    <Avatar
      shape={condition(square, "square")}
      size={condition(square, "large")}
    >
      {index}0
    </Avatar>
  ));
const AvatarComponent = () => (
  <Layout.MenuIconsLayout>{avatars()}</Layout.MenuIconsLayout>
);
const AvatarSquareComponent = () => (
  <Layout.MenuIconsLayout>{avatars(true)}</Layout.MenuIconsLayout>
);
const MenuItemsComponent = () => <Menu items={menuItems} />;

export const Default: Story = {
  render: ({
    collapsedState,
    BottomComponent,
    CenterComponent,
    TopComponent,
  }) => {
    return (
      <Layout
        MenuComponent={
          <MenuLayout
            TopComponent={TopComponent}
            BottomComponent={BottomComponent}
            CenterComponent={CenterComponent}
            collapsedState={collapsedState}
          />
        }
      />
    );
  },
  args: {
    TopComponent: AvatarSquareComponent(),
    BottomComponent: AvatarComponent(),
    CenterComponent: MenuItemsComponent(),
  },
  argTypes: {
    BottomComponent: { table: { disable: true } },
    CenterComponent: { table: { disable: true } },
    TopComponent: { table: { disable: true } },
  },
  tags: ["visual:check"],
};

export const Expanded: Story = {
  ...Default,
  args: {
    ...Default.args,
    collapsedState: "full",
  },
};
export const Collapsed: Story = {
  ...Default,
  args: {
    ...Default.args,
    collapsedState: "hide",
  },
};
export const OnlyTopSection: Story = {
  ...Default,
  args: {
    ...Default.args,
    CenterComponent: null,
    BottomComponent: null,
  },
};
export const OnlyCenterSection: Story = {
  ...Default,
  args: {
    ...Default.args,
    TopComponent: null,
    BottomComponent: null,
  },
};
export const OnlyBottomSection: Story = {
  ...Default,
  args: {
    ...Default.args,
    TopComponent: null,
    CenterComponent: null,
  },
};
