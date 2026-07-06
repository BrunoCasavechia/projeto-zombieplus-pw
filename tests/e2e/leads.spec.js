import { test, expect } from '@playwright/test';

const { LadingPage } = require('../pages/LadingPage')

let ladingPage


test('aperte o play refator', async ({ page }) => {
    
    const ladingPage = new LadingPage(page)

    await ladingPage.visit()
    await ladingPage.openLeadModal()
    await ladingPage.submitForm('Bruno Casavechia', 'bruno.casavechia@gmail.com')
    
    const message = 'Agradecemos por compartilhar seus dados conosco. Em breve, nossa equipe entrará em contato!' 
    await ladingPage.toastHaveText(message)
    
  });
  
  test('inserindo apenas o nome', async ({ page }) => {
    
    const ladingPage = new LadingPage(page)
    await ladingPage.visit()
    await ladingPage.openLeadModal()
    // await ladingPage.submitForm('Bruno Casavechia', 'bruno.casavechia@gmail.com')
    

  await expect(
    page.getByTestId('modal').getByRole('heading')
  ).toHaveText('Fila de espera')

  await page.getByPlaceholder('Informe seu nome').fill('Bruno Casavechia')

  await page.getByTestId('modal').getByText('Quero entrar na fila').click()

  await expect(page.locator('.alert')).toHaveText('Campo obrigatório')
});


