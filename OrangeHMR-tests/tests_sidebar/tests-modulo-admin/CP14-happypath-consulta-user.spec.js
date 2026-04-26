import { test, expect } from '@playwright/test';
import { LoginHelp } from '../HELPER/LoginHelp.js';
import { password, username } from '../DATOS/users.js';

const users = require('../DATOS/users.json'); 

  
test('Happy-path-filtro-user', async ({ page }) => { 
//arrange
    await LoginHelp(page, username, password);
    const camposDeFiltro =[user.users.filtro-user-valido.username, user.users.filtro-user-valido.userRole, 
    user.users.filtro-user-valido.employeeName, user.users.filtro-user-valido.status];
    

//act
  await page.getByRole('textbox').nth(1).fill(users.filtro-user-valido.username);  //username
  await page.getByText('-- Select --').first().click(); 
  await page.getByRole('option', { name: 'Admin' }).click(); //user role
  await page.getByRole('textbox', { name: 'Type for hints...' }).fill(users.filtro-user-valido.employeeName); //Employee Name
  await page.getByText(users.filtro-user-valido.employeeName).click(); //employee name
  await page.getByRole('listbox').getByText(users.filtro-user-valido.status).click(); //status
  await page.getByRole('button', { name: 'Search' }).click();

  
  await page.getByText('(x) Record Found').click(); //aca puede haber 1 o muchas coincidencias

//asserts
  await expect(page.getByRole('row', { name: ' Username  User Role , Employee Name , Status , Actions' })).toBeVisible(); //esto es generico
  await expect(page.getByRole('row', { name: 'camposDeFiltro' })).toBeVisible(); //esto depende de la busqueda que realice. 
});