import BasePage from "../pageObjects/basePage";

class HomePage extends BasePage {
  static get url() {
    return "/#/";
  }

  static get dismissButton() {
    return cy.get("[aria-label='Close Welcome Banner']");
  }

  static get meWantItButton() {
    return cy.get("[aria-label='dismiss cookie message']");
  }

  static get Button_account(){
    return cy.get('#navbarAccount > .mat-button-wrapper > span')
  }

  static get Button_accountLogin(){
    return cy.get('#navbarLoginButton')
  }
  static get Validate_accountEmail(){
    return cy.get('.mat-menu-content > [aria-label="Go to user profile"] > span')
  }

  static get Button_search(){
    return cy.get('.mat-search_icon-search')
  }
  static get Input_search(){
    return cy.get("#mat-input-0")
  }
  static get Validate_cardDescription(){
    return cy.get('.container > [fxlayout="row"] > :nth-child(2) > :nth-child(2)')
  }
  static get Button_cardSelect(){
    return cy.get('.item-name')
  }
  static get Button_closeCard(){
    return cy.get('.close-dialog')
  }
  static get Selection_ReviewOpen(){
    return cy.get('.mat-expansion-indicator')
  }
  static get Validate_Review(){
    return cy.get('.mat-tooltip-trigger')
  }
  static get Input_Review(){
    return cy.get('#mat-input-1')
  }
  static get Button_ReviewSubmit(){
    return cy.get('#submitButton')
  }
  static get Button_ItemPerPage(){
    return cy.get('#mat-select-0')
  }

  static get Validate_ItemsPerPage(){
    return cy.get('[class="mat-grid-tile ng-star-inserted"]')
  }

  static get Button_24ItemsPerPage(){
    return cy.get('#mat-option-1')
  }
  static get Button_36ItemsPerPage(){
    return cy.get('#mat-option-2')
  }

  static get Button_addToBasket(){
    return cy.get('button[class = "mat-focus-indicator btn-basket mat-button mat-raised-button mat-button-base mat-primary ng-star-inserted"]')
  }
  static get Button_Basket(){
    return cy.get('.mat-toolbar-row > .mat-focus-indicator.ng-star-inserted')
  }
  
  static get Button_accountOptions(){
    return cy.get('.mat-menu-content')
  }

  static get Link_SavedAdresses(){
    return cy.get('[routerlink="/address/saved"] > span')
  }
  static get Link_PaymentOptions(){
    return cy.get('[routerlink="/saved-payment-methods"] > span')

  }

  

  



  


  



  
  






  
}

export default HomePage;
