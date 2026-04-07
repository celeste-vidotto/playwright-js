//verificamos que el boton de recuperacion de contraseña funcione correctamente, 
//haciendo click en el enlace "Forgot your password?" y verificando que se redirige 
//a la página de recuperación de contraseña.

import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  test.setTimeout(120000);  // Extiende el timeout del test a 2 minutos
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  await expect(page.getByText('Forgot your password?')).toBeVisible();
  await page.getByText('Forgot your password?').click();

  //Verifica que se redirige a la página de recuperación de contraseña y se visualiza UI correcta,
  //con el mensaje "Please enter your username to receive a password reset link"

  await page.locator('div').nth(3).click();
  await page.getByRole('heading', { name: 'Reset Password' }).click();
  await page.getByText('Please enter your username to').click();
  await page.getByText('Username', { exact: true }).click();
  await page.locator('i').click();
  await page.locator('div').filter({ hasText: /^Username$/ }).nth(2).click();
  await page.getByRole('textbox', { name: 'Username' }).click();
  await page.getByRole('textbox', { name: 'Username' }).fill('');
  //valida que el campo para ingresar el username funcione correctamente, 
  // ingresando "Admin" y haciendo click en "Reset Password"
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('A');
  await page.getByRole('textbox', { name: 'Username' }).press('CapsLock');
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('button', { name: 'Reset Password' }).click(); 

  //Redirige a una página de confirmación que muestra el mensaje:
  // "Reset Password link sent successfullyA reset password link has been sent to you"
  //y valida que la UI que se muestra sea la correcta. 

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset', { timeout: 290000 });
  await page.locator('div').nth(1).click();
  await page.getByText('Reset Password link sent successfullyA reset password link has been sent to you').click();
  await page.getByRole('heading', { name: 'Reset Password link sent' }).click();
  await page.getByText('A reset password link has').click();
  await page.getByText('You can follow that link and').click();
  await page.getByText('Note: If the email does not').click();
  await page.getByText('Note:').dblclick();
  await page.getByText('If the email does not arrive').click();
});

//Como no tenemos aun acceso al correo electrónico, no podemos verificar que el enlace de restablecimiento
// de contraseña se haya enviado correctamente. 
// Sin embargo, podemos validar que la página de confirmación muestre el mensaje correcto 
// y que la UI sea la adecuada.