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
 

//act
  await page.getByRole('textbox').nth(1).fill(camposDeFiltro.username);  //username
  await OpenAdmin.userRole(camposDeFiltro.userRole); //selecciono el user role del filtro
/*PARA EL CAMPO DESPLEGABLE 'TYPE FOR HINTS' lo existente es cambiado constantemente, no se puede automatizar. Pero de poder podria ser algo asi: 
await page.getByRole('textbox', { name: 'Type for hints...' }).fill(camposDeFiltro.employeeName);  esto completa el campo
await page.getByText('listbox').filter({ hasText: camposDeFiltro.employeeName, timeout: 100000 }).click(); esto selecciona la opcion coincidente
Ademas la lista no carga con el test, por lo que siempre falla.*/ 
  await OpenAdmin.Status(camposDeFiltro.status); //selecciono el status del filtro
  await page.getByRole('button', { name: 'Search' }).click();


  //asserts
  await page.getByText('(1) Record Found').click(); //aca puede haber 1 o muchas coincidencias
      //pero si los datos son validos, siempre va a haber al menos 1 coincidencia.
 
  const ElementsFromResults = [camposDeFiltro.username, camposDeFiltro.userRole, camposDeFiltro.status]; //esto es para verificar que cada uno de los campos del resultado de la busqueda sea el esperado.
    for (const resultElements of ElementsFromResults) { 
        await expect(page.getByRole('row', { name: resultElements }) ).toBeVisible(); 

}});


