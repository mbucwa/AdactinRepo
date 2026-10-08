import { expect, test } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('ILABACCEL-1543', () => {
  test('[ILABACCEL-1539] Verify login attempt with invalid password is rejected', async ({ page }) => {
    test.info().annotations.push({ type: 'test_key', description: 'ILABACCEL-1539' });
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to https://adactinhotelapp.com/
    await loginPage.open();

    // Step 2: Enter username `AutotestB`.
    await loginPage.fillUsername('AutotestB');

    // Step 3: Enter an invalid password, for example `WrongPass`.
    await loginPage.fillPassword('WrongPass');

    // Step 4: Click the Login button.
    await loginPage.submitLogin();

    // Expected result: Error message `Invalid Login details or Your Password might have expired. Click here to reset your password` is displayed.
    await loginPage.expectInvalidLoginError();

    // Expected result: User remains on the login page.
    await expect(page).toHaveURL(/adactinhotelapp\.com\/?$/);
  });
});
