//verificar el flujo de log in exitoso: 
//ingresando el usuario "Admin" y contraseña "admin123", 
//verificar que se redirige a la página de inicio correctamente.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('A');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('textbox', { name: 'Password' }).fill('admin123');
  await page.getByRole('button', { name: 'Login' }).click();
});

//NOTA PARA PREGUNTAR: wait page.getByRole('textbox', { name: 'Username' }).click();  
// con esta linea de click me tira error ¿¿¿¿?????????????
// click para botton no para textbox, por eso me tira error.



