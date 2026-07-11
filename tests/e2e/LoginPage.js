import {test, expect} from '@playwright/test'

export class LoginPage {

    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto('http://localhost:3000/admin/login')
    }

    async form() {
        const loginForm = this.page.locator('.login-form')
        await expect(loginForm).toBeVisible()
    }

    async email(nome, senha) {
        await this.page.getByPlaceholder('E-mail').fill(nome)
        await this.page.getByPlaceholder('Senha').fill(senha)
        await this.page.getByRole('button', { name: 'Entrar' }).click()
    }

    async errorEmail() {
        const emailInvalido = this.page.getByText('Email incorreto')
        await expect(emailInvalido).toBeVisible()
    }

    async errorSenha() {
        const senhaInvalida = this.page.locator('.toast')
        await expect(senhaInvalida).toBeVisible()
    }

    async errorCampoVazio() {
        await expect(this.page.getByText('Campo obrigatório')).toBeVisible()
    }
}