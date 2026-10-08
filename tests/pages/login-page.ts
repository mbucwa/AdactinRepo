import { expect, Page } from '@playwright/test';
import { BasePage } from './base-page';

export class LoginPage extends BasePage {
  readonly usernameField = this.page.locator('#username');
  readonly passwordField = this.page.locator('#password');
  readonly loginButton = this.page.getByRole('button', { name: 'Login' });
  readonly invalidLoginMessage = this.page.getByText(/Invalid Login details or Your Password might have expired\./);
  readonly usernameValidationMessage = this.page.getByText('Enter Username');
  readonly passwordValidationMessage = this.page.getByText('Enter Password');
  readonly searchHotelLink = this.page.getByRole('link', { name: 'Search Hotel' });

  constructor(page: Page) {
    super(page);
  }

  async open() {
    await this.navigateTo('/');
  }

  async fillUsername(username: string) {
    await this.fillInput(this.usernameField, username, 'username');
  }

  async fillPassword(password: string) {
    await this.fillInput(this.passwordField, password, 'password');
  }

  async submitLogin() {
    await this.clickElement(this.loginButton, 'Login button');
  }

  async expectSuccessfulLogin() {
    await expect(this.page).toHaveURL(/SearchHotel\.php/);
    await expect(this.searchHotelLink).toBeVisible();
  }

  async expectInvalidLoginError() {
    await expect(this.invalidLoginMessage).toBeVisible();
    await expect(this.page).toHaveURL(/adactinhotelapp\.com\/?$/);
  }

  async expectValidationError() {
    await expect(this.usernameValidationMessage.or(this.passwordValidationMessage)).toBeVisible();
  }
}
