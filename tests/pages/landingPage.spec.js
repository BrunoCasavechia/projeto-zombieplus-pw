import { test, expect } from "@playwright/test";
import { LandingPage } from "../e2e/LandingPage";

test('Leads - Cadastro válido', async ({ page }) => {
    const landingPage = new LandingPage(page)

    await landingPage.visit()
    await landingPage.botaoCadastroLeads()
    await landingPage.formulario('zombieplus', 'zombieplus@gmail.com')
    await landingPage.textoToastCadastro()
})

test('Leads - Cadastro com campos em branco (nome)', async ({ page }) => {
    const landingPage = new LandingPage(page)

    await landingPage.visit()
    await landingPage.botaoCadastroLeads()
    await landingPage.formulario('', 'zombieplus@gmail.com')
    await landingPage.textoErroCampoVazio()
})

test('Leads - Cadastro com campos em branco (email)', async ({ page }) => {
    const landingPage = new LandingPage(page)

    await landingPage.visit()
    await landingPage.botaoCadastroLeads()
    await landingPage.formulario('zombieplus', '')
    await landingPage.textoErroCampoVazio()
})

test('Leads - Cadastro com campo de email inválido', async ({page}) => {
    const landingPage = new LandingPage(page)

    await landingPage.visit()
    await landingPage.botaoCadastroLeads()
    await landingPage.formulario('zombieplus', 'zombieplusgmail.com')
    await landingPage.textoErroEmailIncorreto()
})