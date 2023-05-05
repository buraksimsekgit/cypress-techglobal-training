/// <reference types="Cypress" />

import WaitsPage from '../../pages/waitsPage'

describe('Waits Test', () => {
  const waitsPage = new WaitsPage()

  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('Waits').click()
  })

  /**
   * Go to https://techglobal-training.com/
   * Click on "Practices" dropdown in the header
   * Select the "Frontend Testing" option from the dropdown menu
   * Click on the "Waits" card to navigate to the Waits page
   * Click on the "Click on me to see a red box" button
   * Wait for a maximum of 10 seconds for the red box to appear
   * Validate the red box is displayed within the specified time
   * Click on the "Click on me to see a blue box" button
   * Wait for a maximum of 35 seconds for the blue box to appear
   * Validate the blue box is displayed within the specified time
   */

  it.skip('should validate red and blue boxes are displayed after respective waits', () => {
    // Click on the red box button and wait for it to appear with a maximum timeout of 20 seconds
    waitsPage.redBoxButton().click()
    waitsPage.redBox().should('be.visible', { timeout: 10000 })

    // Click on the blue box button and wait for it to appear with a maximum timeout of 35 seconds
    waitsPage.blueBoxButton().click()
    waitsPage.blueBox().should('be.visible', { timeout: 30000 })
  })
})
