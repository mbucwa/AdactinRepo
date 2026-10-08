import { expect, test } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('ILABACCEL-1545', () => {
  test('[ILABACCEL-1538] Verify login attempt with invalid username is rejected', async ({ page }) => {
    test.info().annotations.push({ type: 'test_key', description: 'ILABACCEL-1538' });
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to https://adactinhotelapp.com/
    await loginPage.open();

    // Step 2: Enter an invalid username, for example `InvalidUser3`.
    await loginPage.fillUsername('InvalidUser3');

    // Step 3: Enter password `IA4073`.
    await loginPage.fillPassword('IA4073');

    // Step 4: Click the Login button.
    await loginPage.submitLogin();

    // Expected result: Error message `Invalid Login details or Your Password might have expired. Click here to reset your password` is displayed.
    await loginPage.expectInvalidLoginError();

    // Expected result: User remains on the login page.
    await expect(page).toHaveURL(/adactinhotelapp\.com\/?$/);
  });
});
