import { Layout } from "@/components/ui/layouts";
import { TextBox } from "./text-box";
import type { Meta, StoryObj } from "@storybook/react";
import { ComponentProps } from "react";
import { PageContainer } from "@/components/ui/page/page-container";
import { faker } from "@faker-js/faker";
import { Divider, Space } from "antd";
type TextBoxPropsAndCustomArgs = ComponentProps<typeof TextBox> & {};

const meta: Meta<TextBoxPropsAndCustomArgs> = {
  component: TextBox,
};

export default meta;
type Story = StoryObj<TextBoxPropsAndCustomArgs>;

export const DefaultTextBox: Story = {
  render: (args) => {
    return (
      <PageContainer>
        <TextBox placeholder={faker.lorem.paragraphs(1)} {...args} />
        <Divider />
        <TextBox placeholder={faker.lorem.paragraphs(4)} bold rows={5} />
        <Divider />
        <TextBox placeholder={faker.lorem.paragraphs(1)} heading rows={1} />
        <Divider />
      </PageContainer>
    );
  },
  args: {
    readOnly: false,
  },
};

export const BoldedTextBox: Story = {
  render: () => {
    return (
      <PageContainer>
        <TextBox placeholder={faker.lorem.paragraphs(4)} bold rows={5} />
      </PageContainer>
    );
  },
};
