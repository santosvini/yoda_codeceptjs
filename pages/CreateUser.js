const { I } = inject();

const user = {
   name: '#nome',
   email: '#email',
   instagram: '#insta',
   submitButton: "button[type='button']",
  }
  
class CreateUser {

  fillName(text) {
    I.seeElement({xpath: "//label[contains(.,'Nome completo')]"})
    I.fillField(user.name, text)
  }

  fillEmail(text) {
    I.seeElement({xpath: "//label[contains(.,'Email')]"})
    I.fillField(user.email, text)  
  }

  choiceOrder() {
    I.seeElement({xpath: "//label[contains(.,'Ordem')]"})
    I.click({css: 'span.is-fullwidth'})
    I.click({xpath: "//option[contains(.,'Jedi')]"})
  }

  choiceRadioOrder() {
    I.seeElement({xpath: "//label[contains(.,'Cavaleiro Jedi')]"});
    I.click({css: 'span.check'})
  }

  birthDate() {
    I.seeElement({xpath: "//label[contains(.,'Data de nascimento')]"})
    I.click({xpath: "//input[@placeholder='Selecione...']"})
    I.seeElement({css: 'div.dropdown-item'})
    I.seeElement({css: '.datepicker-content'})
    I.click({css: 'a.datepicker-cell'})
  } 

  fillInstagram(text) {
    I.seeElement({xpath: "//label[contains(.,'Instagram')]"})
    I.fillField(user.instagram, text)  
  }

  checkbox() {
    I.seeElement({css: 'label.b-checkbox'})
    I.click({css: 'label.b-checkbox'})
  }

  clickSubmit() {
    I.click({css: "button[type='button']"})
  }

  withoutFillFields() {

    I.seeElement({xpath: "//label[contains(.,'Nome completo')]"})
    I.waitForElement({css: 'p.is-danger'}, " O nome é obrigatório. ")

    I.seeElement({xpath: "//label[contains(.,'Email')]"})
    I.waitForElement({css: 'p.is-danger'}, " O email é obrigatório. ")

    I.seeElement({xpath: "//label[contains(.,'Ordem')]"})
    I.waitForElement({css: 'p.is-danger'}, " Escolha a ordem. ")

    I.seeElement({xpath: "//label[contains(.,'Data de nascimento')]"})
    I.waitForElement({css: 'p.is-danger'}, " Informe a data de nascimento. ")

    I.seeElement({xpath: "//label[contains(.,'Instagram')]"})
    I.waitForElement({css: 'p.is-danger'}, " O instagram é obrigatório. ")
  }
}

module.exports = CreateUser;
