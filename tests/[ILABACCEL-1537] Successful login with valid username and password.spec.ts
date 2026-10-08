import { test } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('ILABACCEL-1545', () => {
  test('[ILABACCEL-1537] Verify successful login with valid username and password', async ({ page }) => {
    test.info().annotations.push({ type: 'test_key', description: 'ILABACCEL-1537' });
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to https://adactinhotelapp.com/
    await loginPage.open();

    // Step 2: Enter username `AutotestB`.
    await loginPage.fillUsername('AutotestB');

    // Step 3: Enter password `IA4073`.
    await loginPage.fillPassword('IA4073');

    // Step 4: Click the Login button.
    await loginPage.submitLogin();

    // Expected result: User is redirected to the Search Hotel page dashboard.
    await loginPage.expectSuccessfulLogin();
  });
});
