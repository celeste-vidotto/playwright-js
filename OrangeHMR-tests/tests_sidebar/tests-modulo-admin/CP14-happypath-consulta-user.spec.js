import { test, expect } from '@playwright/test';
import { LoginHelp } from '../../HELPER/LoginHelp.js';
import { adminPage } from '../../MAPEOSpage/adminPage.js';
const user = require('../../DATOS/users.json'); 

test('Happy-path-filtro-user', async ({ page }) => { 
//arrange
    await LoginHelp(page, user.usuarioValido.username, user.usuarioValido.password);
    const camposDeFiltro = {
        username: user.filtroUserValido.username,
        userRole: user.filtroUserValido.userRole,
        employeeName: user.filtroUserValido.employeeName,
        status: user.filtroUserValido.status
    };
    const OpenAdmin = new adminPage(page); //instancio la clase adminPage para usar sus metodos
    await OpenAdmin.OpenModuloAdmin(); //uso el metodo para abrir el modulo admin
    await OpenAdmin.AdminPageLoaged('Admin'); //verifico que el modulo admin se haya cargado
    await OpenAdmin.AdminElementsBeVisible(); //verifico que los elementos principales del modulo admin sean visibles
    //esto es para el assert, para verificar que el resultado de la busqueda sea el esperado.
    

//act
  await page.getByRole('textbox').nth(1).fill(camposDeFiltro.username);  //username
 // await page.getByText('-- Select --').first().click(); voy usar adminpage userrole
 // await page.getByRole('option', { name: 'Admin' }).click(); //user role
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill(camposDeFiltro.employeeName); //Employee Name

  //reever esto!!1
  await page.getByText('listbox').filter({ hasText: camposDeFiltro.employeeNameList, timeout: 100000 }).click(); //employee name
  //await page.getByRole('listbox').getByText(camposDeFiltro.status).click(); // luego con adminpage status
  await page.getByRole('button', { name: 'Search' }).click();



  //asserts
  await page.getByText('(1) Record Found').click(); //aca puede haber 1 o muchas coincidencias
      //pero si los datos son validos, siempre va a haber al menos 1 coincidencia.

  await expect(page.getByRole('row', { name: ' Username  User Role , Employee Name , Status , Actions' })).toBeVisible(); //esto es generico
  await expect(page.getByRole('row', { name: 'camposDeFiltro' })).toBeVisible(); //esto depende de la busqueda que realice. 
});

