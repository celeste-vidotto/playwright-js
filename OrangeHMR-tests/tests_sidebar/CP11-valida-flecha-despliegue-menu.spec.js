import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.locator('.oxd-main-menu-search').click();
  await page.getByRole('link', { name: 'Admin' }).click();
  await page.getByRole('link', { name: 'PIM' }).click();
  await page.getByRole('link', { name: 'Leave' }).click();
  await page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('button').click();
  await page.getByRole('link', { name: 'client brand logo' }).click();
  await page.getByText('AdminPIMLeaveTimeRecruitmentMy').click();
  await page.getByRole('navigation', { name: 'Sidepanel' }).getByRole('button').click();
  await expect(page.getByText('AdminPIMLeaveTimeRecruitmentMy')).toBeVisible();
});