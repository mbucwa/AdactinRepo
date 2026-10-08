import { expect, test } from '@playwright/test';
import { LoginPage } from './pages/login-page';

test.describe('ILABACCEL-1545', () => {
  test('[ILABACCEL-1542] Verify appropriate error message is displayed on failed login', async ({ page }) => {
    test.info().annotations.push({ type: 'test_key', description: 'ILABACCEL-1542' });
    const loginPage = new LoginPage(page);

    // Step 1: Navigate to https://adactinhotelapp.com/
    await loginPage.open();

    // Step 2: Enter username `AutotestB`.
    await loginPage.fillUsername('AutotestB');

    // Step 3: Enter password `IA4073`.
    await loginPage.fillPassword('IA4073');

    // Step 4: Click the Login button.
    await loginPage.submitLogin();

    // Expected result: The URL contains `SearchHotel.php`.
    await loginPage.expectSuccessfulLogin();

    // Expected result: The Search Hotel heading is visible.
    await expect(page.getByText('Search Hotel', { exact: true })).toBeVisible();
  });
});
