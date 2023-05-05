class DropdownPage {
    productDropdown = "#product_dropdown";
    colorDropdown = "#color_dropdown";
    shipDropdown = ".react-dropdown-select-content";
    submitButton = "#submit";
    resultText = "#result";
  
    getProductOption(value) {
      return cy.get(this.productDropdown).contains(value);
    }
  
    getColorOption(value) {
      return cy.get(this.colorDropdown).contains(value);
    }
  
    getShipOption(value) {
      return cy.get(this.shipDropdown).contains(value);
    }
  
    // Actions
    selectProduct(value) {
      cy.get(this.productDropdown).select(value).should("have.value", value);
    }
  
    selectColor(value) {
      cy.get(this.colorDropdown).select(value);
    }
  
    selectShip(value) {
      cy.get(this.shipDropdown).click();
      cy.get(this.getShipOption(value)).click();
    }
  
    clickSubmit() {
      cy.get(this.submitButton).click();
    }
  
    // Assertions
    validateResult(expectedResultText) {
      cy.get(this.resultText).should("have.text", expectedResultText);
    }
  }
  
  export default DropdownPage;
  