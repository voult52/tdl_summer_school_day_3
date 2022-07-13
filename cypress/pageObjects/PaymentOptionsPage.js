import BasePage from './basePage'

class PaymentOptionsPage extends BasePage {
  static get url () {
    return '/#/login';
  }

  static get Button_NewCard(){
    return   cy.get('.mat-expansion-panel-header-title')
  }

  static get Input_Name(){
    return   cy.get('#mat-input-1')
  }
  static get Input_CardNumber(){
    return   cy.get('#mat-input-2')
  }
  static get Input_ExpiredMonth(){
    return   cy.get('#mat-input-3')
  }
  static get Input_ExpiredYear(){
    return   cy.get('#mat-input-4')
  }
  static get Button_Submit(){
    return   cy.get('#submitButton')
  }
  static get Validate_Name(){
    return   cy.get('.cdk-column-Name')
  }
  static get Validate_Expiry(){
    return   cy.get('.cdk-column-Expiry')
  }


  
}

export default PaymentOptionsPage;
