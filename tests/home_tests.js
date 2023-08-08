'use strict';

const HomePage = require('../pages/HomePage')

const homePage = new HomePage

Feature("Homepage");

Before(() => {
  homePage.openSite()
})
Scenario("Access Web Page", async ({ I }) => { 
  homePage.seeTitlte()
  I.waitForElement("img[alt='Yodapp']")
  I.seeElement({css: 'a#welcome'})
  I.seeElement({css: 'a.is-success'})
  I.seeElement({css: 'div.hero-body'})
  I.saveScreenshot("../mochawesome-report/evidences/Home.png")
})