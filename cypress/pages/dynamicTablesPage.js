class DynamicTablesPage {
  clickAddProductButton() {
    cy.get("#add_product_btn").click();
    cy.get("#modal_title").should("have.text", "Add New Product");
  }

  enterProductDetails(productDetails) {
    cy.get(".input").each(($input, index) => {
      cy.wrap($input).type(productDetails[index]);
    });
  }
  submitProductDetails() {
    cy.get("#submit").click();
  }

  getTableRowSize() {
    return cy.get("#product_table").getTableRows();
  }

  getTotalAmount() {
    return cy.get("#total_amount").extractNumber();
  }

  getRowTexts(rowNumber) {
    return cy.getRowTexts("#product_table", rowNumber);
  }

  getCellText(rowNumber, columnNumber) {
    return cy.getCellText("#product_table", rowNumber, columnNumber);
  }

  gettableTotal() {
    return cy.get("#total_amount");
  }
}

export default DynamicTablesPage;
