import BasePage from '../pageObjects/basePage'

class LoginPage extends BasePage {
  static get url () {
    return '/#/login';
  }

  static get elementName(){
    return cy.get('elementSelector');
  }

  static get Input_LogEmail(){
    return cy.get('#email')

  }

  static get Input_LogPassword(){
    return cy.get('#password')
  }

  static get Button_Login(){
    return cy.get('#loginButton')
  }
  static get Button_ToRegister(){
    return cy.get('#newCustomerLink > .primary-link')

  }
  
  


}

export default LoginPage;
