import { Layout } from "@/components/ui/layouts";
import { ToggleMenuButton } from "@/features/article/edit-article/side-navigation/components";
import { CmsMenu } from "@/features/cms";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";

import { userEvent, within, expect, waitFor } from "@storybook/test";

type ComponentsPropsAndCustomArgs = {};

const meta: Meta<ComponentsPropsAndCustomArgs> = {};

export default meta;
type Story = StoryObj<ComponentsPropsAndCustomArgs>;

export const ToggleMainMenu: Story = {
  render: () => {
    return (
      <Layout MenuComponent={<CmsMenu />}>
        <Layout
          MenuComponent={
            <Layout.MenuLayout
              TopComponent={
                <Layout.MenuIconsLayout>
                  <ToggleMenuButton />
                </Layout.MenuIconsLayout>
              }
            />
          }
        />
      </Layout>
    );
  },
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByLabelText("toggle-menu-button"));
  },
};
