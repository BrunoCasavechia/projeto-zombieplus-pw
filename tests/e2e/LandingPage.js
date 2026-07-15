import { test, expect } from '@playwright/test'
import { timeStamp } from 'node:console'

export class LandingPage {
    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto('http://localhost:3000/')
    }

    async botaoCadastroLeads() {
        await this.page.getByRole('button', { name: /Aperte o play/ }).click()
        await expect(this.page.getByRole('heading', { name: 'Fila de espera' })).toBeVisible()
    }

    async formulario(nome, email) {
        await this.page.getByPlaceholder('Informe seu nome').fill(nome)
        await this.page.getByPlaceholder('Informe seu email').fill(email)
        await this.page.getByRole('button', { name: 'Quero entrar na fila!' }).click()
    }
    
    async textoToastCadastro(){
        const message = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!'

        await expect(this.page.locator('.toast')).toHaveText(message)
        await expect(this.page.locator('.toast')).toBeHidden({ timeout: 5000 })
    }

    async textoErroCampoVazio() {
        await expect(this.page.getByText('Campo obrigatório')).toBeVisible()
    }

    async textoErroEmailIncorreto() {
        await expect(this.page.getByText('Email incorreto')).toBeVisible()
    }
}