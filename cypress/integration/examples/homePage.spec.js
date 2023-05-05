/// <reference types="Cypress" />

import { HomePageTexts } from '../../enums/enums'
import { default as BasePage } from '../../pages/basePage'

describe('Techglobal Training website', () => {
  const basePage = new BasePage()

  beforeEach(() => {
    cy.visit('https://www.techglobal-training.com/')
    cy.viewport(1920, 1080) // You can replace these values with the desired width and height
  })

  /**
   * Go to https://techglobal-training.netlify.app/
   * Validate the title is "Techglobal Training | Home"
   * Validate the copyright in the footer is displayed and the text is "© 2023 TechGlobal - All Rights Reserved"
   * Validate the logo is visible
   */

  it('Validate logo', () => {
    cy.title().should('eq', 'Techglobal Training | Home')
    cy.waitFor('#logo', { timeout: 10000 })
    // basePage.getLogo().should("be.visible");
  })

  /**
   * Go to https://techglobal-training.netlify.app/
   * Validate the address in the footer is displayed and the text is "2860 S River Rd Suite 350, Des Plaines IL 60018"
   * Validate the copyright in the footer is displayed and the text is "© 2023 TechGlobal - All Rights Reserved"
   * Validate both the Instagram and Facebook items are displayed and enabled
   */

  it('should display the logo and navigate to the frontend development page', () => {
    const address = HomePageTexts.ADDRESS

    for (let i = 0; i < address.length; i++) {
      basePage.getAddressAndCopyright().eq(i).should('have.text', address[i])
      basePage.getAddressAndCopyright().eq(i).should('be.visible')

      basePage.getSocials().eq(i).should('be.visible')
    }
  })
})
