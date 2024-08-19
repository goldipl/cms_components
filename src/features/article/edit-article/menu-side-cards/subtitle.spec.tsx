import { createTest } from "@storybook/react/experimental-playwright";
import { test as base, expect } from "@playwright/experimental-ct-react";

const test = createTest(base);

test("Default", async ({ mount }) => {
  // The mount function will execute all the necessary steps in the story,
  // such as loaders, render, and play function
});
