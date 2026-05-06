import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.locator('svg').first().click();
  await page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('button').click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('adm');
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('heading', { name: 'Admin' }).click();
  await page.getByRole('textbox', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Search' }).fill('leave');
  await page.locator('div').filter({ hasText: /^Leave$/ }).click();
  await page.getByRole('link', { name: 'Leave' }).click();
  await page.locator('div').filter({ hasText: /^Leave$/ }).click();
});