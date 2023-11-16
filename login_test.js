Feature('login');

Scenario('Login com sucesso',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login',5)
    I.fillField('#user','rennanzinho@gmail.com')
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.see('Login realizado')
}).tag('@sucesso')

Scenario('Tentando Logar digitando apenas o e-mail',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login',5)
    I.fillField('#user','rennanzinho@gmail.com')
    I.click('#btnLogin')
    I.see('Senha inválida.')
    
}).tag('@onlyemail')

Scenario('Tentando logar sem digitar e-mail e senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 5)
    I.click('#btnLogin')
    I.see('E-mail inválido.')

})

Scenario('Tentando Logar digitando apenas a senha',  ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    I.waitForText('Login', 5)
    I.fillField('#password', '123456')
    I.click('#btnLogin')
    I.see('E-mail inválido.')
    

})