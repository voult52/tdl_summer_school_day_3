import BasePage from './basePage'

class AddressPage extends BasePage {
  static get url () {
    return '/#/login';
  }

  static get Button_NewAddress(){
    return  cy.get('.mat-card > div.ng-star-inserted > .mat-focus-indicator')
  }
  static get Input_Country(){
    return  cy.get('#mat-input-1')
  }
  static get Input_Name(){
    return  cy.get('#mat-input-2')
  }
  static get Input_Mobile(){
    return  cy.get('#mat-input-3')
  }
  static get Input_ZipCode(){
    return  cy.get('#mat-input-4')
  }
  static get Input_Address(){
    return  cy.get('#address')
  }
  static get Input_City(){
    return  cy.get('#mat-input-6')
  }
  static get Input_State(){
    return  cy.get('#mat-input-7')
  }
  static get Button_submit(){
    return  cy.get('#submitButton')
  }
  static get Validate_Adresses(){
    return  cy.get('.cdk-column-Address')
  }



  
  
  


}

export default AddressPage;
