/// <reference types="Cypress" />

import { default as DropdownPage } from '../../pages/dropdownPage'

describe('Dropdown Page', () => {
  const dropdownPage = new DropdownPage()

  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('Dropdowns').click()
  })

  /**
   * Test Case: Validate Dropdowns Functionality on TechGlobal Training Page
   * Go to https://techglobal-training.com/
   * Click on the "Practices" dropdown in the header
   * Select the "Frontend Testing" option
   * Click on the "Alerts" card
   * Select the "MacBook Pro 13" option from the "Product" dropdown.
   * Select the "Green" option from the "Color" dropdown.
   * Open the "Shipping" dropdown and click on the "Delivery" option.
   * Click on the "Submit" button.
   * Validate result message displays "Your Green MacBook Pro 13 will be delivered to you."
   */

  it('should select product, color, and ship option, and validate the result text', () => {
    const item = 'iPad Pro 11'
    const color = 'Green'
    const ship = 'Pick up'

    dropdownPage.selectProduct(item)
    dropdownPage.selectColor(color)

    cy.get('.react-dropdown-select-content').click()
    cy.get(`[aria-label="${ship}"]`).click()

    dropdownPage.clickSubmit()

    const expectedResultText =
      ship === 'Delivery'
        ? `Your ${color} ${item} will be delivered to you.`
        : `Your ${color} ${item} is ready to be picked up.`

    dropdownPage.validateResult(expectedResultText)
  })
})
