import {test} from '@playwright'

export class LandingPage {
    constructor(page) {
        page = this.page
    }


    async botaoCadastroUsuario() {
        await this.page.getByRole('button', {name: 'Aperte o play... se tiver coragem'}).click()
    }
}