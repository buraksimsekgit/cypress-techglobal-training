/// <reference types="Cypress" />

import DynamicElementsPage from '../../pages/dynamicElementsPage'

describe('Dynamic Elements Test', () => {
  const dynamicElementsPage = new DynamicElementsPage()

  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('Dynamic Elements').click()
  })

  /**
   * Go to https://techglobal-training.netlify.app/
   * Click on the "Practices" dropdown in the header
   * Select the "Frontend Testing" option from the dropdown menu
   * Click on the "Dynamic Elements" card to navigate to the Dynamic Elements page
   * Locate the elements with partially dynamic IDs starting with "box_1_" and "box_2_"
   * Verify that there are two elements with the expected partially dynamic IDs
   * Validate the text content of the first element:
   * Validate the text content of the second element:
   */

  it('should validate visibility and text of elements with partially dynamic IDs', () => {
    dynamicElementsPage.validateDynamicElementsVisibilityAndText()
  })
})
