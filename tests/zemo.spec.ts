import { test, expect } from '@playwright/test';

test.use({ ignoreHTTPSErrors: true });

test('sign in to Zomato', async ({ page }) => {
  await page.goto('https://www.zomato.com/login');

  // Fill in the email or phone number
  await page.fill('input[placeholder*="email" i]', 'nileshpal1432@gmail.com');

  // Fill in the password
  await page.fill('input[type="password"]', 'naksh@09');

  // Click the sign in button
  await page.click('button[type="submit"]');

  // Wait for navigation or check if logged in
  await page.waitForURL('https://www.zomato.com/');

  // Assert that we are logged in, perhaps by checking for a user menu or profile
  await expect(page.locator('text=Your Account')).toBeVisible();
});