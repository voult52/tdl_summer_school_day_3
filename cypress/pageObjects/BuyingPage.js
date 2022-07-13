import BasePage from '../pageObjects/basePage'

class BuyingPage extends BasePage {
  static get url () {
    return '/#/login';
  }

  static get Button_checkout(){
    return cy.get('#checkoutButton')
  }
  static get Selection_adressByCountry(){
    return cy.get('.mat-row > .cdk-column-Country')
  }

  static get Button_continueAddress(){
    return cy.get('.btn-next')
  }

  static get Selection_shippingSpeed(){
    return cy.get('.mat-card')
  }

  static get Button_continueShippingSpeed(){
    return   cy.get('.nextButton')
  }

  static get Selection_payMethods(){
    return   cy.get('.mat-row')
  }
  static get Button_ProductCheckout(){
    return   cy.get('#checkoutButton')
  }
  static get Button_continueShippingSpeed(){
    return   cy.get('.nextButton')
  }
  static get Validate_succesfulPayment(){
    return   cy.get('.confirmation')
  }


  
  
  


}

export default BuyingPage;
