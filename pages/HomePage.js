const { I } = inject();

class HomePage {
  openSite(){
    I.amOnPage('/')
  }

  seeTitlte(){
    I.seeInTitle('Yodapp | QAninja')
  }
}

module.exports = HomePage;