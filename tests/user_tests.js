'use strict'

const HomePage = require('../pages/HomePage')
const CreateUser = require('../pages/CreateUser')

const homePage = new HomePage
const createUser = new CreateUser

Feature("Create user")

Before(({ I }) => {
  I.amOnPage('/new')
})

Scenario("Create a new user", ({ I }) => {
  I.see('Cadastrar novo usuário', '.card-header-title')
  createUser.fillName('Han Solo')
  createUser.fillEmail('han.solo@starwars.com')
  createUser.choiceOrder()
  createUser.birthDate()
  createUser.fillInstagram('@hansolo')
  createUser.checkbox()
  createUser.clickSubmit()
  homePage.openSite()
  I.seeElement({xpath: "//table[contains(@class,'table')]"})
  I.saveScreenshot("../mochawesome-report/evidences/Create.png")
})

Scenario("Don't submit register without fill fields", ({ I }) => {
  createUser.clickSubmit()
  createUser.withoutFillFields()
  I.saveScreenshot("../mochawesome-report/evidences/DontSubimit.png")
})

Scenario("Don't submit without fill name", ({ I }) => {
  I.see('Cadastrar novo usuário', '.card-header-title')
  createUser.fillEmail('han.solo@starwars.com')
  createUser.choiceOrder()
  createUser.birthDate()
  createUser.fillInstagram('@hansolo')
  createUser.checkbox()
  createUser.clickSubmit()
  I.waitForElement({css: 'p.is-danger'}, " O nome é obrigatório. ")
  I.saveScreenshot("../mochawesome-report/evidences/Name.png")
})

Scenario("Don't submit without fill e-mail", ({ I }) => {
  I.see('Cadastrar novo usuário', '.card-header-title')
  createUser.fillName('Han Solo')
  createUser.choiceOrder()
  createUser.birthDate()
  createUser.fillInstagram('@hansolo')
  createUser.checkbox()
  createUser.clickSubmit()
  I.waitForElement({css: 'p.is-danger'}, " O email é obrigatório. ")
  I.saveScreenshot("../mochawesome-report/evidences/Email.png")
})

Scenario("Don't submit without fill order", ({ I }) => {
  I.see('Cadastrar novo usuário', '.card-header-title')
  createUser.fillName('Han Solo')
  createUser.fillEmail('han.solo@starwars.com')
  createUser.birthDate()
  createUser.fillInstagram('@hansolo')
  createUser.checkbox()
  createUser.clickSubmit()
  I.waitForElement({css: 'p.is-danger'}, " Escolha a ordem. ")
  I.saveScreenshot("../mochawesome-report/evidences/Order.png")
})

Scenario("Don't submit without choice a one order", ({ I }) => {
  I.see('Cadastrar novo usuário', '.card-header-title')
  createUser.fillName('Han Solo')
  createUser.fillEmail('han.solo@starwars.com')
  createUser.choiceOrder()
  createUser.birthDate()
  createUser.fillInstagram('@hansolo')
  createUser.checkbox()
  createUser.clickSubmit()
  I.waitForElement("//div[@class='notices is-top']")
  I.saveScreenshot("../mochawesome-report/evidences/ChoiceOrder.png")
})

Scenario("Don't submit without fill birthday", ({ I }) => {
  I.see('Cadastrar novo usuário', '.card-header-title')
  createUser.fillName('Han Solo')
  createUser.fillEmail('han.solo@starwars.com')
  createUser.choiceOrder()
  createUser.fillInstagram('@hansolo')
  createUser.checkbox()
  createUser.clickSubmit()
  I.waitForElement({css: 'p.is-danger'}, " Informe a data de nascimento. ")
  I.saveScreenshot("../mochawesome-report/evidences/Birthday.png")
})

Scenario("Don't submit without fill Instagram", ({ I }) => {
  I.see('Cadastrar novo usuário', '.card-header-title')
  createUser.fillName('Han Solo')
  createUser.fillEmail('han.solo@starwars.com')
  createUser.choiceOrder()
  createUser.birthDate()
  createUser.checkbox()
  createUser.clickSubmit()
  I.waitForElement({css: 'p.is-danger'}, " O instagram é obrigatório. ")
  I.saveScreenshot("../mochawesome-report/evidences/Instagram.png")
})