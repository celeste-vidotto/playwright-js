import { test, expect } from '@playwright/test';
import { LoginHelp } from '../../HELPER/LoginHelp.js';
import { adminPage } from '../../MAPEOSpage/adminPage.js';
const user = require('../../DATOS/users.json'); 

test('Query user not exist', async ({ page }) => { 

//arrange
    await LoginHelp(page, user.usuarioValido.username, user.usuarioValido.password);
    const camposDeFiltro = {
        username: user.filtroUserInvalido.username,
        userRole: user.filtroUserInvalido.userRole,
        employeeName: user.filtroUserInvalido.employeeName,
        status: user.filtroUserInvalido.status
    };
    const OpenAdmin = new adminPage(page); //instancio la clase adminPage para usar sus metodos
    await OpenAdmin.OpenModuloAdmin(); //uso el metodo para abrir el modulo admin
    await OpenAdmin.AdminPageLoaged('Admin'); //verifico que el modulo admin se haya cargado
    await OpenAdmin.AdminElementsBeVisible(); //verifico que los elementos principales del modulo admin sean visibles
 

//act
  await page.getByRole('textbox').nth(1).fill(camposDeFiltro.username);  
  await OpenAdmin.userRole(camposDeFiltro.userRole); 
  //reever si carga employee name "invalidate"
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill(camposDeFiltro.employeeName);
  await page.getByRole('textbox', { name: 'No Records Found', timeout: 100000  }).click();
  await expect(page.getByText('Invalid')).toBeVisible();
  await OpenAdmin.Status(camposDeFiltro.status); 
  await page.getByRole('button', { name: 'Search' }).click();



  //asserts
  await expect(page.locator('#oxd-toaster_1').getByText('No Records Found')).toBeVisible();
  await expect(page.locator('span').filter({ hasText: 'No Records Found' })).toBeVisible();
 

});

