const {expect} = require('@playwright/test')

class loginPage {

    constructor(page) {
        this.page = page
    }

    async visit() {
        await this.page.goto('http://localhost:3000/admin/login')
 
        const loginForm = this.page.locator('.login-form')
        await expect(loginForm).toBeVisible()
    }
}