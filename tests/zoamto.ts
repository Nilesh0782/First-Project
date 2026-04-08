import { test, expect } from '@playwright/test';

test.use({ ignoreHTTPSErrors: true });

test('has title', async ({ page }) => {
  await page.goto('https://www.zomato.com/');
  await expect(page).toHaveTitle(/Playwright/);
});
poiksjs
test('get started link', async ({ page }) => {
  await page.goto('https://www.zomato.com/');
  await page.getByRole('link', { name: 'Get started' }).click();
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
