import { Page } from "@playwright/test";
import { StoryObj } from "@storybook/react";

export const filterStories = (stories: StoryObj[]): StoryObj[] =>
  stories.filter((story) => story?.tags?.includes("visual:check"));

export function getStoryUrl(storybookUrl: string, id: string): string {
  const params = new URLSearchParams({
    id,
    viewMode: "story",
    nav: "0",
  });

  return `${storybookUrl}/iframe.html?${params.toString()}`;
}

export async function navigate(
  page: Page,
  storybookUrl: string,
  id: string
): Promise<void> {
  try {
    const url = getStoryUrl(storybookUrl, id);
    await page.goto(url);
    await page.waitForLoadState("networkidle");
    await page.waitForSelector("#storybook-root", { timeout: 5000 });
  } catch (error) {
    console.log(error);
    // Handle error here in cases where the above times out due to 404's and other factors.
  }
}
