class CheckboxesPage {
  checkboxes = () => cy.get('#checkbox-button-group_1 .mr-2')

  checkAll() {
    this.checkboxes().each($el => {
      cy.wrap($el).check()
    })
  }

  uncheckAll() {
    this.checkboxes().each($el => {
      cy.wrap($el).uncheck()
    })
  }

  validateAllChecked() {
    this.checkboxes().each($el => {
      cy.wrap($el).should('be.checked')
    })
  }

  validateAllUnchecked() {
    this.checkboxes().each($el => {
      cy.wrap($el).should('not.be.checked')
    })
  }
}

export default CheckboxesPage
