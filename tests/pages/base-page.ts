import { expect, Locator, Page } from '@playwright/test';

export abstract class BasePage {
  constructor(protected readonly page: Page) {}

  protected async executeAction<T>(action: () => Promise<T>, actionName: string): Promise<T> {
    try {
      return await action();
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      throw new Error(`Failed to ${actionName}: ${message}`);
    }
  }

  async navigateTo(path: string = '/') {
    await this.executeAction(() => this.page.goto(path), `navigate to ${path}`);
  }

  protected async fillInput(locator: Locator, value: string, fieldName: string) {
    await this.executeAction(async () => {
      await locator.fill(value);
      await expect(locator).toHaveValue(value);
    }, `fill ${fieldName}`);
  }

  protected async clickElement(locator: Locator, elementName: string) {
    await this.executeAction(async () => {
      await locator.click();
    }, `click ${elementName}`);
  }
}
