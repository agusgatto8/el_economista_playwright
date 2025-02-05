import {Page, expect, selectors} from '@playwright/test';

export class FunctionsPage {
  private page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async clickOn(selector: string) {
    await this.page.click(selector);
    }

  async completeField(selector: string, value: string) {
    await this.page.fill(selector, value);
    }

    async expectElementVisible(selector: string) {
        await expect(this.page.locator(selector)).toBeVisible();
    }

    async checkTextElement(selector: string, value: string) {
        await expect(this.page.locator(selector)).toHaveText(value);
        return (this.page.locator(selector)).textContent();
    }
}