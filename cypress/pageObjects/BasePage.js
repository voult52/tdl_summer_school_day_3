class BasePage {
  static get header() {
    return cy.get("h1");
  }

  static visit(options) {
    options = {
      timeout: Cypress.config("defaultCommandTimeout"),
      uniqueText: this.uniqueText,
      expectedUrl: this.url,
      ...options,
    };
    return cy.visit(this.url).then(() => this.assertIsCurrentPage(options));
  }

  static assertIsCurrentPage(
    options = {
      timeout: Cypress.config("defaultCommandTimeout"),
      expectedUrl: this.url,
    }
  ) {
    return this.validatePath(options);
  }

  static validatePath(
    options = {
      timeout: Cypress.config("defaultCommandTimeout"),
      expectedUrl: this.url,
    }
  ) {
    return cy
      .location(options)
      .should((loc) => expect(loc.href).to.include(options.expectedUrl));
  }
}

export default BasePage;
