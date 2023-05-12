/// <reference types="Cypress" />

import 'cypress-real-events'
import ActionsPage from '../../pages/actionsPage'
import { ExpectedTexts } from '../../enums/enums'

describe('Actions Test', () => {
  const actionsPage = new ActionsPage()

  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('Actions').click()
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

  it('should perform click, right-click, and double-click actions', () => {
    // Perform a click action on the first web element labeled "Click on me"
    actionsPage.clickButton().click()

    actionsPage.clickResult().should('contain.text', ExpectedTexts.CLICK_BUTTON_TEXT)

    actionsPage.rightClickButton().rightclick()

    actionsPage.rightClickResult().should('contain.text', ExpectedTexts.RIGHT_CLICK_BUTTON_TEXT)

    actionsPage.doubleClickButton().dblclick()

    actionsPage.doubleClickResult().should('contain.text', ExpectedTexts.DOUBLE_CLICK_BUTTON_TEXT)
  })

  it.skip('should drag and drop an element', () => {
    const dataTransfer = new DataTransfer()
    cy.get('#drag_element').trigger('dragstart', {
      dataTransfer,
    })

    cy.get('#drop_element').trigger('drop',{
      dataTransfer,
    })
  })
})
