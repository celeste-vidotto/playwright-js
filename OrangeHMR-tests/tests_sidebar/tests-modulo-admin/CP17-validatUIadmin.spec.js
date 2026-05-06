import { test, expect } from '@playwright/test';
import { LoginHelp } from '../../HELPER/LoginHelp.js';
import { adminPage } from '../../MAPEOSpage/adminPage.js';
const user = require('../../DATOS/users.json'); 

test('validate UI admin', async ({ page }) => { 

    await LoginHelp(page, user.usuarioValido.username, user.usuarioValido.password);
    
    const OpenAdmin = new adminPage(page); //instancio la clase adminPage para usar sus metodos
    await OpenAdmin.OpenModuloAdmin(); //uso el metodo para abrir el modulo admin
    await OpenAdmin.AdminPageLoaged('Admin'); //verifico que el modulo admin se haya cargado
    await OpenAdmin.AdminElementsBeVisible(); //verifico que los elementos principales del modulo admin sean visibles
    await expect(page.getByText('System Users')).toBeVisible(); 
    await expect(page.getByLabel('Topbar Menu').getByText('User Management')).toBeVisible();
   

    const AdminModules = ['Job', 'Organization', 'Qualifications', 'Nationalities', 
        'Corporate Branding','Configuration']; 
    for (const modules of AdminModules) { 
          await expect(page.getByText(modules)).toBeVisible();
    }
    const FilterElements = ['Username', 'User Role', 'Employee Name', 'Status']; 
    for (const elementf of FilterElements) { 
          await expect(page.getByText(elementf )).toBeVisible();
    }
    const ResultElements = ['Username', 'User Role', 'Employee Name', 'Status', 'Actions']; 
    for (const elementR of ResultElements) { 
          await expect(page.getByRole('columnheader', { name: elementR })).toBeVisible();

    }


});
