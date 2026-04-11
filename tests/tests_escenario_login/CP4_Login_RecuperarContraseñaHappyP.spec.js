//verificamos que el boton de recuperacion de contraseña funcione correctamente, 
//haciendo click en el enlace "Forgot your password?" y verificando que se redirige 
//a la página de recuperación de contraseña.

import { test, expect } from '@playwright/test';
import {goToLoginPage} from '../HELPER/goToURLpage.js';

test('recuperacion de contraseña exitoso', async ({ page }) => {
  await goToLoginPage(page);
  await page.getByText('Forgot your password?').click();
  //Verifica que se redirige a la página de recuperación de contraseña y se visualiza UI correcta,
  //con el mensaje "Please enter your username to receive a password reset link"
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode', { timeout: 290000 });
  await page.getByRole('textbox', { name: 'Username' }).fill('Admin');
  await page.getByRole('heading', { name: 'Reset Password' }).click();


  //Redirige a una página de confirmación que muestra el mensaje:
  // "Reset Password link sent successfullyA reset password link has been sent to you"
  //y valida que la UI que se muestra sea la correcta. 

  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/sendPasswordReset', { timeout: 290000 });
  await expect(page.getByText('Reset Password link sent successfully')).toBeVisible();
  await expect(page.getByText('A reset password link has been sent to you')).toBeVisible();
  await expect(page.getByText('You can follow that link and select a new password.')).toBeVisible();
  await expect(page.getByText('If the email does not arrive, please contact your OrangeHRM Administrator.')).toBeVisible();
console.log('recuperacion de contraseña exitoso');
});

//Como no tenemos aun acceso al correo electrónico, no podemos verificar que el enlace de restablecimiento
// de contraseña se haya enviado correctamente. 
// Sin embargo, podemos validar que la página de confirmación muestre el mensaje correcto 
// y que la UI sea la adecuada.