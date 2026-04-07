//Validar que la estructura de la página de login sea correcta, 
// verificando que los elementos principales como el logo, 
// los campos de usuario y contraseña, recuperacion de contraseña y el botón de inicio de sesión 
// estén presentes y sean visibles.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.locator('div').nth(2)).toBeVisible();
  await expect(page.locator('div').nth(4)).toBeVisible();
  await expect(page.locator('div').nth(5)).toBeVisible();
  await expect(page.getByRole('img', { name: 'company-branding' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Login' })).toBeVisible();
  await expect(page.getByText('LoginUsername : AdminPassword')).toBeVisible();
  await expect(page.getByText('Username : AdminPassword :')).toBeVisible();
  await expect(page.getByText('Username : Admin')).toBeVisible();
  await expect(page.getByText('Password : admin123')).toBeVisible();
  await expect(page.getByText('Username : AdminPassword : admin123UsernamePassword Login Forgot your password?')).toBeVisible();
  await expect(page.getByText('Username', { exact: true })).toBeVisible();
  await expect(page.locator('i').first()).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Username$/ }).nth(2)).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Username' })).toBeVisible();
  await expect(page.getByText('Password', { exact: true })).toBeVisible();
  await expect(page.locator('i').nth(1)).toBeVisible();
  await expect(page.getByRole('textbox', { name: 'Password' })).toBeVisible();
  await expect(page.locator('div').filter({ hasText: /^Password$/ }).nth(2)).toBeVisible();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await expect(page.getByText('Forgot your password?')).toBeVisible();
  await expect(page.locator('div').nth(2)).toBeVisible();
  await expect(page.getByText('OrangeHRM OS')).toBeVisible();
  await expect(page.getByText('© 2005 - 2026 OrangeHRM, Inc')).toBeVisible();

});