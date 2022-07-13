import BasePage from '../pageObjects/basePage'

class LoginPage extends BasePage {
  static get url () {
    return '/#/login';
  }

  static get elementName(){
    return cy.get('elementSelector');
  }
}

export default LoginPage;
