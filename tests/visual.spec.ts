import { test, expect } from "@playwright/test";
import { filterStories, navigate } from "../utils";
import manifest from "../storybook-static/index.json" with { type: "json" };

const options = {
  fullPage: true,
  animations: "disabled",
};

test.beforeEach(async ({ page }, meta) => {
  /**
   * Set the viewport size and other global level browser settings here.
   * For example you may want to block certain resources, etc.
   */
  await page.setViewportSize({ width: 1920, height: 1080 });

  //   await navigate(page, process.env.UPSTREAM_STORYBOOK_URL, meta.title);
  //   await page.screenshot({
  //     path: `tests/visual.spec.ts-snapshots/${meta.title}-upstream-${process.platform}.png`,
  //     options
  //   });
});

const visualStories = filterStories(Object.values(manifest.entries));

visualStories.forEach((story) => {
  test(story.id ?? "UNNAMED", async ({ page }, meta) => {
    console.log(process.env.VITE_STORYBOOK_URL);
    await navigate(page, process.env.VITE_STORYBOOK_URL, meta.title);
    const sourceScreenshot = `${meta.title}-${process.platform}.png`;

    const screenshot = await page.screenshot({
      path: `tests/${meta.title}_${process.platform}_current.png`,
      options,
    });

    expect(screenshot).toMatchSnapshot(sourceScreenshot);
  });
});
