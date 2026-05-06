//Mapeo del modulo Admin
import { expect } from '@playwright/test';
import { basePage } from './basePage.js';

export class adminPage extends basePage{
  constructor(page) {
    super(page);


        this.adminTitle = page.locator('h6.oxd-topbar-header-breadcrumb-module');
        //this.UsernameLabel el input cambia constantemente, por lo que no puedo mappear?
        this.EmployeeNameLabel = page.getByText('Employee Name', { exact: true });
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.resetButton = page.getByRole('button', { name: 'Reset' });
        this.addButton = page.getByRole('button', { name: 'Add' });
    }

    async OpenModuloAdmin(){
        await this.page.getByRole('link', { name: 'Admin' }).click();
    }

      async AdminPageLoaged(expectedTitle) {
        await expect(this.page).toHaveURL(/admin/); // esto es que en la url en algun lado diga /admin/
        await expect(this.adminTitle).toHaveText(expectedTitle); // esto es que el titulo de la pagina diga Admin
    }

    async userRole( roll ) { //uso esto pq las opciones de user role y status son
    // desplegables, entonces tengo que escribir el valor que quiero 
    // y luego hacer click en la opcion que me aparece
        await this.page.locator('.oxd-icon.bi-caret-down-fill.oxd-select-text--arrow').first().click();
        await this.page.getByRole('option', { name: roll }).click();
    }

    async Status(estado) {
        await this.page.locator('div:nth-child(4) > .oxd-input-group > div:nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon').click();
        await this.page.getByRole('option', { name: estado }).click();
    }
  
    async AdminElementsBeVisible(){
        await expect(this.EmployeeNameLabel).toBeVisible();
        await expect(this.searchButton).toBeVisible();
        await expect(this.resetButton).toBeVisible();
        await expect(this.addButton).toBeVisible();
    }
}


