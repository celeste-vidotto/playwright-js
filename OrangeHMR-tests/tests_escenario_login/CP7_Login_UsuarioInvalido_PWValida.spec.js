
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Username' }).fill('Julia'); // con "a" minuscula
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('alert').locator('div').filter({ hasText: /^Invalid credentials$/ });

});
//codigo limpio:

import { LoginHelp } from '../HELPER/LoginHelp.js';
test('Login con usuario invalido y contraseña valida', async ({ page }) => {
  await LoginHelp(page, 'julia', 'Admin123');
  await page.getByRole('alert').locator('div').filter({ hasText: /^Invalid credentials$/ });
});
