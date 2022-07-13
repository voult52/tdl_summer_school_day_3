import BasePage from '../pageObjects/basePage'

class BuyingPage extends BasePage {
  static get url () {
    return '/#/login';
  }

  static get Button_Checkout(){
    return cy.get('#checkoutButton')
  }
  static get Selection_AdressByCountry(){
    return cy.get('.mat-row > .cdk-column-Country')
  }

  static get elementName(){
    return cy.get('elementSelector');
  }

  static get elementName(){
    return cy.get('elementSelector');
  }

  static get elementName(){
    return cy.get('elementSelector');
  }



  
  


}

export default BuyingPage;
