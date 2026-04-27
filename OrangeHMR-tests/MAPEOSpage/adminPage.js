//Mapeo del modulo Admin

const { expect } = require('@playwright/test');
const BasePage = require('./BasePage');
import { BasePage } from './basePage.js';

export class adminPage extends BasePage {
  constructor(page) {
    super(page);
  }

        this.adminTitle = page.locator('h6');
        //this.UsernameLabel el input cambia constantemente, por lo que no puedo mappear?
        this.EmployeeNameLabel = page.getByText('Employee Name', { exact: true });
        this.searchButton = page.getByRole('button', { name: 'Search' });
        this.resetButton = page.getByRole('button', { name: 'Reset' });
        this.addButton = page.getByRole('button', { name: '+ Add' });
}
    async OpenModuloAdmin(){
        await this.page.getByRole('link', { name: 'Admin' }).click();
}   
    async userRole(roll) { //uso esto pq las opciones de user role y status son
    // desplegables, entonces tengo que escribir el valor que quiero 
    // y luego hacer click en la opcion que me aparece

        await this.input.fill(roll);
        await this.page.getByText(roll).click(); //terminar 
}
    async Status(estado) {
        await this.input.fill(estado);
        await this.page.getByText(estado).click(); //terminar 
    }
    async AdminPageLoaged(){
        await expect(this.page).ToHaveURL(/admin/); // esto es que en la url en algun lado diga /admin/
        await expect(this.adminTitle).toHaveText('Admin/'); // esto es que el titulo de la pagina diga Admin
}
    async AdminElementsBeVisible(){
        await expect(this.EmployeeNameLabel).toBeVisible();
        await expect(this.searchButton).toBeVisible();
        await expect(this.resetButton).toBeVisible();
        await expect(this.addButton).toBeVisible();
}
}