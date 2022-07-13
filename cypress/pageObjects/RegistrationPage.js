import BasePage from '../pageObjects/basePage'

class RegistrationPage extends BasePage {
  static get url () {
    return '/#/register';
  }

  static get elementName(){
    return cy.get('elementSelector');
  }

  static get Input_Email(){
    return cy.get('.mat-form-field.ng-tns-c119-13 > .mat-form-field-wrapper > .mat-form-field-flex > .mat-form-field-infix')
  }
  static get Input_Password(){
    return cy.get('#passwordControl')
  }
  static get Input_RepeatPassword(){
    return cy.get('#repeatPasswordControl')
  }
  static get Selection_OpenSecurityQ(){
    return  cy.get('.mat-select-min-line')
  }
  static get Selection_ChoosePetQ(){
    return cy.get('#mat-option-9 > .mat-option-text')
  }
  static get Input_SecurityQAnswer(){
    return cy.get('#securityAnswerControl')
  }
  static get Button_Register(){
    return cy.get('#registerButton')
  }
  
}

export default RegistrationPage;
