/// <reference types="Cypress" />

import { default as CheckboxesPage } from '../../pages/checkboxesPage'

describe('Techglobal Training website', () => {
  //   const checkboxesPage = new CheckboxesPage()
  const checkboxesPage = new CheckboxesPage()

  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('Checkboxes').click()
  })

  /**
   * Checkboxes
   * Go to https://techglobal-training.netlify.app/
   * Click on "Practices" dropdown in the header
   * Select the "Frontend Testing" option
   * Click on the "Checkboxes" card
   * Validate "Apple" and "Microsoft" checkboxes are displayed, enabled and not selected
   * Select both and validate they are both selected
   * Deselect both and validate they are deselected
   */

  it('should display the logo and navigate to the frontend development page', () => {
    // Validate that all checkboxes are unchecked initially
    checkboxesPage.validateAllUnchecked()

    // Check all checkboxes
    checkboxesPage.checkAll()

    // Validate that all checkboxes are checked
    checkboxesPage.validateAllChecked()

    // Uncheck all checkboxes
    checkboxesPage.uncheckAll()

    // Validate that all checkboxes are unchecked again
    checkboxesPage.validateAllUnchecked()
  })
})
