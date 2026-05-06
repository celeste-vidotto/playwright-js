import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByText('-- Select --').nth(1).click();
  await page.getByText('-- Select --').nth(1).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('(5) Records Found').click();
  await page.getByText('(5) Records Found').click();




  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('button', { name: 'Search' })).toBeVisible();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('textbox').nth(1).click();
  await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByText('-- Select --').nth(1).click();
  await page.getByText('-- Select --').nth(1).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByText('(5) Records Found').click();
  await page.getByText('(5) Records Found').click();
  await expect(page.getByRole('textbox').nth(1)).toBeVisible();
  await page.getByRole('textbox').nth(1).click();
  await page.getByRole('textbox').nth(1).fill('userinvent');
  await page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
  await page.getByRole('option', { name: 'Admin' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('layer');
  await page.getByRole('option', { name: 'No Records Found' }).click();
  await page.getByText('Invalid').click();
  await page.locator('.oxd-autocomplete-text-input').click();
  await page.locator('div').filter({ hasText: /^-- Select --$/ }).nth(2).click();
  await page.getByRole('listbox').getByText('Enabled').click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('div').filter({ hasText: 'System UsersUsernameUser' }).nth(4).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).click();
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill('muser');
  await page.getByRole('option', { name: 'muser 4957589' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('span').filter({ hasText: 'No Records Found' }).click();
});