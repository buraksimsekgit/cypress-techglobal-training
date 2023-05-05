/// <reference types="Cypress" />

import { default as DropdownPage } from '../../pages/dropdownPage'
import { DropdownTexts, DropdownInputs } from '../../enums/enums'

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
    const item = DropdownInputs.PRODUCT_OPTION
    const color = DropdownInputs.COLOR_OPTION
    const ship = DropdownInputs.SHIPPING_OPTION

    dropdownPage.selectProduct(item)
    dropdownPage.selectColor(color)

    cy.get('.react-dropdown-select-content').click()
    cy.get(`[aria-label="${ship}"]`).click()

    dropdownPage.clickSubmit()

    const expectedResultText =
      ship === 'Delivery'
        ? DropdownTexts.RESULT_TEXT_DELIVERY.replace('{color}', color).replace('{product}', item)
        : DropdownTexts.RESULT_TEXT_PICKUP.replace('{color}', color).replace('{product}', item)

    dropdownPage.validateResult(expectedResultText)
  })
})
