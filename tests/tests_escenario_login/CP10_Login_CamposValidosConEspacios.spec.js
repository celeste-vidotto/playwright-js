

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Username' }).fill(' Admin'); // con espacio al inicio
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill(' admin123');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('alert').locator('div').filter({ hasText: /^Invalid credentials$/ });

});

//codigo limpio:
import { LoginHelp } from '../HELPER/LoginHelp.js';
test('sensibilidad al espacio', async ({ page }) => {
  await LoginHelp(page, ' Admin ', 'admin123 ');
  await page.getByRole('alert').locator('div').filter({ hasText: /^Invalid credentials$/ });
});
