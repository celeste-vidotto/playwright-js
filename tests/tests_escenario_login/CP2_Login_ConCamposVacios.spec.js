//Intentar ingresar con campos vacios
// se espera que no se permita ingresar y se visualice "required" debajo de cada campo
import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).press('Enter');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page.locator('.oxd-input-field-error-message').filter({ hasText: 'Required' })).toHaveCount(2);

});

//con codigo limpio:
import { LoginHelp } from '../HELPER/LoginHelp.js';
test('Login con campos vacios', async ({ page }) => {
  await LoginHelp(page, '', '');
  console.log('Login con campos vacios');
});
