// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../e2e/LoginPage';

test('preencher formulario', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.visit()
  await loginPage.form()
});
