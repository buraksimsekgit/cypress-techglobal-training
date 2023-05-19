class RadioButtonsPage {
  getRadioButtons() {
    return cy.get('#radio-button-group_1 input')
  }

  /**
   * Selects a radio button by its id and validates that it is checked.
   * @param {string} optionId - The id of the radio button to be selected.
   */

  selectRadioButton(optionId) {
    cy.get(`#${optionId}`).check().should('be.checked')
  }

  /**
   * Validates the state of the radio buttons by checking that only the expected radio button is selected.
   * @param {Object} expectedState - An object containing the expected state of the radio buttons.
   * @param {string} expectedState.checked - The label text of the radio button that should be checked.
   */

  validateRadioButtonState(expectedState) {
    this.getRadioButtons()
      .should('have.length', 3)
      .each(radioButton => {
        const label = Cypress.$(radioButton).parent().text().trim()

        if (label === expectedState.checked) {
          expect(radioButton).to.be.checked
        } else {
          expect(radioButton).to.not.be.checked
        }
      })
  }
}

export default RadioButtonsPage
