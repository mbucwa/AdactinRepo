import { expect, test } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('ILABACCEL-1545', () => {
  test('[ILABACCEL-1542] Verify appropriate error message is displayed on failed login', async ({ page }) => {
    test.info().annotations.push({ type: 'test_key', description: 'ILABACCEL-1542' });
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to https://adactinhotelapp.com/
    await loginPage.open();

    // Step 2: Enter incorrect credentials.
    await loginPage.fillUsername('WrongUser');
    await loginPage.fillPassword('WrongPass');

    // Step 3: Click the Login button.
    await loginPage.submitLogin();

    // Expected result: An appropriate error message is displayed to the user.
    await loginPage.expectInvalidLoginError();
    await expect(page.getByText(/Invalid Login details or Your Password might have expired\./)).toBeVisible();
  });
});
