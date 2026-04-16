import { test, expect } from '@playwright/test';

import {LoginHelp} from '../HELPER/LoginHelp.js';

import { username, password } from '../DATOS/users.js';

test('Validate sidebar items and titles', async ({ page }) => {
//arrenge
    await LoginHelp(page, username, password); 
//acts
const ElementsFromSidebar = ['Admin', 'PIM', 'Leave', 'Time', 'Recruitment', 
'My Info', 'Performance', 'Dashboard', 'Directory', 'Maintenance', 'Claim', 'Buzz'];

for (const element of ElementsFromSidebar) { 
//recorro el menu con un for para validar que cada titulo del menu este y sea pueda hacer click
  await expect(page.getByRole('link', { name: element })).click(); //FALLA EN ESTE CLICK REVER!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
 
//asserts: valido que, luego del click, se me habilite una nueva ui con el titulo del elemento en el header
    await expect(page.getByRole('heading', { name: element })).toBeVisible();
}});
