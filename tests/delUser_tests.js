'use strict'

const HomePage = require('../pages/HomePage')
const CreateUser = require('../pages/CreateUser')

const homePage = new HomePage
const createUser = new CreateUser

Feature("Delete user")
Scenario("Delete user", ({ I }) => {

  I.amOnPage('/new')
  createUser.fillName('Han Solo')
  createUser.fillEmail('han.solo@starwars.com')
  createUser.choiceOrder()
  createUser.birthDate()
  createUser.fillInstagram('@hansolo')
  createUser.checkbox()
  createUser.clickSubmit()
  homePage.openSite()
  I.seeElement({xpath: "//table[contains(@class,'table')]"})
  I.click({css: "button.is-danger"})
  I.saveScreenshot("../mochawesome-report/evidences/Delete.png")
})