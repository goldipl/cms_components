import type { Preview } from "@storybook/react";
import "./test.css";
import { ConfigProvider } from "../src/styles/config-provider";
console.log("debug-log-ConfigProvider", ConfigProvider);
const preview: Preview = {
  decorators: [
    (Story) => (
      <ConfigProvider>
        <Story />
      </ConfigProvider>
    ),
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
