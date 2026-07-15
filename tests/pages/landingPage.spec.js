import {tests} from "@playwright/test";
import { LandingPage } from "../e2e/LandingPage";

test('Acessando botão para criar usuario', async ({page}) => {
    const landingPage = new LandingPage(page)
    await landingPage.botaoCadastroUsuario()

})

// test('Cadastrando o usuario', async ({page}) => {
//     const LandingPage = new Landing(page)

//     await 
// })