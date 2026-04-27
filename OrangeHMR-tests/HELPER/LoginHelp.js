import { goToLoginPage } from './goToURLpage.js';

export async function LoginHelp(page, username, password) {
  await goToLoginPage(page);
  await page.fill('input[name="username"]', username);
  await page.fill('input[name="password"]', password);
  await page.click('button[type="submit"]');
}