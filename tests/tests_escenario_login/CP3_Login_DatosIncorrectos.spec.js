  //Intener ingresar con un usuario y contraseña incorrectos, por ejemplo "admin" y "ADMIN1234",
  //Se espera que se muestre un mensaje de error indicando "Invalid credentials".

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
    await page.getByRole('textbox', { name: 'Username' }).fill('admin'); // con "a" minuscula
  await page.getByRole('textbox', { name: 'Password' }).press('Enter');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Password' }).fill('ADMIN1234');
  await page.getByRole('textbox', { name: 'Password' }).press('CapsLock');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('alert').locator('div').filter({ hasText: /^Invalid credentials$/ });

});

//con codigo limpio:
import {LoginHelp} from '../HELPER/LoginHelp.js';
test ('Login con datos incorrectos', async ({ page }) => {
  await LoginHelp(page,'userincorrecto','passwordincorrecta');
  await page.getByRole('alert').locator('div').filter({ hasText: /^Invalid credentials$/ });
  
});
