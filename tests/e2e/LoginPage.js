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
}