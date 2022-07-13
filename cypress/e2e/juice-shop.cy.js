import AddressPage from "../pageObjects/AddressPage";
import BuyingPage from "../pageObjects/BuyingPage";
import HomePage from "../pageObjects/HomePage";
import LoginPage from "../pageObjects/LoginPage";
import PaymentOptionsPage from "../pageObjects/PaymentOptionsPage";
import RegistrationPage from "../pageObjects/RegistrationPage";

describe("Juice-shop without auto login", () => {
  beforeEach(() => {
    HomePage.visit();
    HomePage.dismissButton.click();
    HomePage.meWantItButton.click();
  });

  it("Login", () => {
    // Click Account button
    HomePage.Button_account.click()
    // Click Login button
    HomePage.Button_accountLogin.click()
    // Set email value to "demo"
    LoginPage.Input_LogEmail.type("demo")
    // Set password value to "demo"
    LoginPage.Input_LogPassword.type("demo")
    // Click Log in
    LoginPage.Button_Login.click()
    // Click Account button
    HomePage.Button_account.click()
    // Validate that "demo" account name appears in the menu section
    HomePage.Validate_accountEmail.should("have.text", " demo ")
    
  });

  it("Registration", () => {

    // Click Account button
    HomePage.Button_account.click()
    // Login button
    HomePage.Button_accountLogin.click()
    // Click "Not yet a customer?"
    LoginPage.Button_ToRegister.click()
    // Find - how to generate random number in JS
    // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
    // Save that email address to some variable
    let email = "email_" + Math.floor(Math.random()*9999) + "@ebox.com"
    RegistrationPage.Input_Email.type(email)
    // Fill in password field and repeat password field with same password
    RegistrationPage.Input_Password.type("random_password")
    RegistrationPage.Input_RepeatPassword.type("random_password")
    // Click on Security Question menu
    RegistrationPage.Selection_OpenSecurityQ.click()
    // Select  "Name of your favorite pet?"
    RegistrationPage.Selection_ChoosePetQ.click()
    // Fill in answer
    RegistrationPage.Input_SecurityQAnswer.type("Kimi")
    // Click Register button
    RegistrationPage.Button_Register.click()
    // Set email value to previously created email
    LoginPage.Input_LogEmail.type(email)
    // Set password value to previously used password value
    LoginPage.Input_LogPassword.type("random_password")
    // Click login button
    LoginPage.Button_Login.click()
    // Click Account button
    HomePage.Button_account.click()
    // Validate that account name (with previously created email address) appears in the menu section
    HomePage.Validate_accountEmail.should("have.text", " " + email + " ")    
    
  });
});

describe("Juice-shop with Auto login", () => {
  beforeEach(() => {
    cy.login("demo", "demo");
    HomePage.visit();
  });

  it("Search and validate Lemon", () => {
    // Click on search icon
    HomePage.Button_search.click()
    // Search for Lemon
    HomePage.Input_search.type("Lemon{enter}")
    // Select a product card - Lemon Juice (500ml)
    HomePage.Button_cardSelect.contains("Lemon Juice").click()
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.Validate_cardDescription.should("have.text", "Sour but full of vitamins.")
  });

  it("Search 500ml and validate Lemon, while having multiple cards", () => {
    // Click on search icon
    HomePage.Button_search.click()
    // Search for 500ml
    HomePage.Input_search.type("500ml{enter}")
    // Select a product card - Lemon Juice (500ml)
   HomePage.Button_cardSelect.contains("Lemon Juice").click()
    // Validate that the card (should) contains "Sour but full of vitamins."
    HomePage.Validate_cardDescription.should("have.text", "Sour but full of vitamins.")

  });

  it("Search 500ml and validate cards", () => {
    // Click on search icon
    HomePage.Button_search.click()
    // Search for 500ml
    HomePage.Input_search.type("500ml{enter}")
    // Select a product card - Eggfruit Juice (500ml)
    HomePage.Button_cardSelect.contains("Eggfruit Juice").click()
    // // Validate that the card (should) contains "Now with even more exotic flavour."
     HomePage.Validate_cardDescription.should("have.text", "Now with even more exotic flavour.")
    // // Close the card
     HomePage.Button_closeCard.click()
    // // Select a product card - Lemon Juice (500ml)
    HomePage.Button_cardSelect.contains("Lemon Juice").click()
    // // Validate that the card (should) contains "Sour but full of vitamins."
     HomePage.Validate_cardDescription.should("have.text", "Sour but full of vitamins.")
    // // Close the card
    HomePage.Button_closeCard.click()
    // // Select a product card - Strawberry Juice (500ml)
    HomePage.Button_cardSelect.contains("Strawberry Juice").click()
    // // Validate that the card (should) contains "Sweet & tasty!"
    HomePage.Validate_cardDescription.should("have.text", "Sweet & tasty!")
  });

  it("Read a review", () => {
   // Click on search icon
   HomePage.Button_search.click()
   // Search for King
   HomePage.Input_search.type("King{enter}")
   // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
   HomePage.Button_cardSelect.contains('OWASP Juice Shop "King of the Hill"').click()
   // Click expand reviews button/icon (wait for reviews to appear)
   cy.wait(180)
   HomePage.Selection_ReviewOpen.click()
   // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
   HomePage.Validate_Review.should("contain.text", "K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!")
  });

  it("Add a review", () => {
    // Click on search icon
   HomePage.Button_search.click()
    // Search for Raspberry
    HomePage.Input_search.type("Raspberry{enter}")
    // Select a product card - Raspberry Juice (1000ml)
    HomePage.Button_cardSelect.contains('Raspberry Juice').click()
    // Type in review - "Tastes like metal"
    cy.wait(180)
    HomePage.Input_Review.type("Tastes like metal")
    // Click Submit
    HomePage.Button_ReviewSubmit.click()
    // Click expand reviews button/icon (wait for reviews to appear)
    cy.wait(180)
    HomePage.Selection_ReviewOpen.click()
    // Validate review -  "Tastes like metal"
    HomePage.Validate_Review.last().should("contain.text", "Tastes like metal")
   });

   it("Validate product card amount", () => {
  
   // Validate that the default amount of cards is 12
   HomePage.Validate_ItemsPerPage.should("have.length", "12")
   // Change items per page (at the bottom of page) to 24
   HomePage.Button_ItemPerPage.click()
   HomePage.Button_24ItemsPerPage.click()
   // Validate that the amount of cards is 24
   HomePage.Validate_ItemsPerPage.should("have.length", "24")
   // Change items per page (at the bottom of page) to 36
   HomePage.Button_ItemPerPage.click()
   HomePage.Button_36ItemsPerPage.click()
   // Validate that the amount of cards is 35
   HomePage.Validate_ItemsPerPage.should("have.length", "35")

   });

   it("Buy Girlie T-shirt", () => {
    // Click on search icon
   HomePage.Button_search.click()
   // Search for Girlie
   HomePage.Input_search.type("Girlie{enter}")
  // Add to basket "Girlie"
  HomePage.Button_addToBasket.click()
  // Click on "Your Basket" button
  HomePage.Button_Basket.click()
  // Create page object - BasketPage
  // Click on "Checkout" button
  BuyingPage.Button_checkout.click()
  // Create page object - SelectAddressPage
  // Select address containing "United Fakedom"
  BuyingPage.Selection_adressByCountry.contains("United Fakedom").click()
  // Click Continue button
  BuyingPage.Button_continueAddress.click()
  // Create page object - DeliveryMethodPage
  // Select delivery speed Standard Delivery
  BuyingPage.Selection_shippingSpeed.contains("Standard Delivery").click()
  // Click Continue button
  BuyingPage.Button_continueShippingSpeed.click()
  // Create page object - PaymentOptionsPage
  // Select card that ends with "5678"
  BuyingPage.Selection_payMethods.contains("5678").parent().find(".mat-radio-outer-circle").click({ force: true })
  // Click Continue button
  BuyingPage.Button_continueShippingSpeed.click()
  // Create page object - OrderSummaryPage
  BuyingPage.Button_ProductCheckout.click()
  // Click on "Place your order and pay"
  // Create page object - OrderCompletionPage
  // Validate confirmation - "Thank you for your purchase!"
  BuyingPage.Validate_succesfulPayment.should("have.text", "Thank you for your purchase!") 
    });

    it("Add address", () => {
       
    // Click on Account
    HomePage.Button_account.click()
    // Click on Orders & Payment
    HomePage.Button_accountOptions.contains("Orders & Payment").click()
     // Click on My saved addresses
    HomePage.Link_SavedAdresses.click()
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    AddressPage.Button_NewAddress.click()
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    AddressPage.Input_Country.type("Latvija")
    AddressPage.Input_Name.type("Deniss")
    AddressPage.Input_Mobile.type("25856136")
    AddressPage.Input_ZipCode.type("LV-3113")
    AddressPage.Input_Address.type("Jekaba 12")
    AddressPage.Input_City.type("Engure")
    AddressPage.Input_State.type("Kurzeme")
    AddressPage.Button_submit.click()
    // Click Submit button
    // Validate that previously added address is visible
    AddressPage.Validate_Adresses.last().should("contain.text", "Jekaba 12, Engure, Kurzeme, LV-3113")


      });

      it("Add payment option", () => {
       
       // Click on Account
      HomePage.Button_account.click()
        // Click on Orders & Payment
      HomePage.Button_accountOptions.contains("Orders & Payment").click()
        // Click on My payment options
      HomePage.Link_PaymentOptions.click()
        // Create page object - SavedPaymentMethodsPage
        // Click Add new card
      PaymentOptionsPage.Button_NewCard.click()
        // Fill in Name
      PaymentOptionsPage.Input_Name.type("Deniss")
        // Fill in Card Number
      PaymentOptionsPage.Input_CardNumber.type("2121223243243232")
        // Set expiry month to 7
        PaymentOptionsPage.Input_ExpiredMonth.select('7')
        // Set expiry year to 2090
        PaymentOptionsPage.Input_ExpiredYear.select('2090')
        // Click Submit button
        PaymentOptionsPage.Button_Submit.click()
        // Validate that the card shows up in the list
        cy.wait(50)
        PaymentOptionsPage.Validate_Name.last().should("have.text", "Deniss")
        PaymentOptionsPage.Validate_Expiry.last().should("have.text", "7/2090")
          });
  
});
