/// <reference types="Cypress" />

import { default as AlertPage } from '../../pages/alertPage'
import { AlertTexts } from '../../enums/enums'

describe('Alert Page', () => {
  const alertPage = new AlertPage()

  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('Alerts').click()
  })

  /**
   * Go to https://techglobal-training.netlify.app/
   * Click on the "Practices" dropdown in the header
   * Select the "Frontend Testing" option from the dropdown menu
   * Click on the "Actions" card
   * Verify that the user is redirected to the Actions page
   * Verify that the first three web elements are present and labeled as "Click on me", "Right-Click on me", and "Double-Click on me"
   * Perform a click action on the first web element labeled "Click on me"
   * Verify that a message appears next to the element stating, "You clicked on a button!"
   * Perform a right-click action on the second web element labeled "Right-Click on me"
   * Verify that the message appears next to the element stating, "You right-clicked on a button!"
   * Perform a double-click action on the third web element labeled "Double-Click on me"
   * Verify that the message appears next to the element stating, "You double-clicked on a button!"
   */

  it('validates the warning alert and result message', () => {
    alertPage.clickWarningAlertButton()
    alertPage.validateAlertText(AlertTexts.WARNING)
    alertPage.clickAlertOkButton()
    alertPage.validateActionMessage(AlertTexts.ACTION_MESSAGE)
  })
})
