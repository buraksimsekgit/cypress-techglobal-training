/// <reference types="Cypress" />

import RadioButtonsPage from '../../pages/radioButtonPage'

describe('Radio Buttons Test', () => {
  const radioButtonsPage = new RadioButtonsPage()

  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('Radio Buttons').click()
  })

  /**
   * Go to https://techglobal-training.netlify.app/
   * Click on "Practices" dropdown in the header
   * Select the "Frontend Testing" option
   * Click on the "Radio Buttons" card
   * Validate "Java", "JavaScript" and "C#" radio buttons are displayed, enabled and not selected
   * Select "Java" and validate it is selected but the other 2 are deselected
   * Select "JavaScript" validate it is selected but the other 2 are deselected
   */

  it('should validate the radio buttons', () => {
    // Validate the radio buttons are displayed, enabled and not selected
    radioButtonsPage
      .getRadioButtons()
      .should('have.length', 3)
      .each(radioButton => {
        expect(radioButton).to.be.visible
        expect(radioButton).to.not.be.checked
        expect(radioButton).to.not.be.disabled
      })

    // Select "Java" and validate it is selected but the other 2 are deselected
    radioButtonsPage.selectRadioButton('radio_1_option_1')
    radioButtonsPage.validateRadioButtonState({ checked: 'Java' })

    // Select "JavaScript" and validate it is selected but the other 2 are deselected
    radioButtonsPage.selectRadioButton('radio_1_option_2')
    radioButtonsPage.validateRadioButtonState({ checked: 'JavaScript' })
  })
})
