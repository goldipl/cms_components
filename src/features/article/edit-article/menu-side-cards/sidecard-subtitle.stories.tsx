import { Layout } from "@/components/ui/layouts";
import { SideCardSubtitle } from "./components";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { PageContainer } from "@/components/ui/page/page-container";
import { SparklingLineIcon } from "@icons/sparkling-line";

type SidecardSubtitlePropsAndCustomArgs = ComponentProps<
  typeof SideCardSubtitle
> & {};

const meta: Meta<SidecardSubtitlePropsAndCustomArgs> = {
  component: SideCardSubtitle,
  tags: ["visual:check"],
};

export default meta;
type Story = StoryObj<SidecardSubtitlePropsAndCustomArgs>;

export const DefaultSidecardSubtitle: Story = {
  args: {
    title: "Default subtitle",
  },
};

export const IconSidecardSubtitle: Story = {
  args: {
    title: "Icon subtitle",
    icon: <SparklingLineIcon />,
  },
};

export const GreyoutSidecardSubtitle: Story = {
  args: {
    title: "Greyout subtitle",
    isGreyedOut: true,
    icon: <SparklingLineIcon />,
  },
};

export const WithChildrenSidecardSubtitle: Story = {
  args: {
    title: "With children subtitle",
    children: "Children text",
  },
};
