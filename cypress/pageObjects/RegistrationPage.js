import BasePage from '../pageObjects/basePage'

class RegistrationPage extends BasePage {
  static get url () {
    return '/#/register';
  }

  static get elementName(){
    return cy.get('elementSelector');
  }
}

export default RegistrationPage;
