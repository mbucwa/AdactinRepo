import { test } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('ILABACCEL-1545', () => {
  test('[ILABACCEL-1540] Verify login attempt with empty username and or password fields', async ({ page }) => {
    test.info().annotations.push({ type: 'test_key', description: 'ILABACCEL-1540' });
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to https://adactinhotelapp.com/
    await loginPage.open();

    // Step 2: Leave the username and password fields empty.
    await loginPage.usernameField.fill('');
    await loginPage.passwordField.fill('');

    // Step 3: Click the Login button.
    await loginPage.submitLogin();

    // Expected result: A validation error message is displayed.
    await loginPage.expectValidationError();
  });
});
