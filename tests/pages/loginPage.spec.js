// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from '../e2e/LoginPage';

test('preencher formulario credenciais válidas', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.visit()
  await loginPage.form()
  await loginPage.email('admin@qax.com', 'pwd123')
});

test('preencher formulario com email inválido', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.visit()
  await loginPage.form()
  await loginPage.email('emailinvalidoqax.com', 'pwd13')
  await loginPage.errorEmail()
});

test('preencher formulario com senha inválida', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.visit()
  await loginPage.form()
  await loginPage.email('admin@qax.com', 'senhaInvalida')
  await loginPage.errorSenha()
});

test('preencher formulario campo email vazio', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.visit()
  await loginPage.form()
  await loginPage.email('', 'pwd123')
  await loginPage.errorCampoVazio()
});

test('preencher formulario campo senha vazio', async ({ page }) => {
  const loginPage = new LoginPage(page)

  await loginPage.visit()
  await loginPage.form()
  await loginPage.email('admin@qax.com', '')
  await loginPage.errorCampoVazio()
});

