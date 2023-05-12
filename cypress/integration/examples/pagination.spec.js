/// <reference types="Cypress" />

import { default as PaginationPage } from '../../pages/paginationPage'

describe('Validate the main content of the Pagination Page', () => {
  const paginationPage = new PaginationPage()

  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('Pagination').click()
  })

  /**
   * Test case: Validate the main content of the Pagination Page
   * Visit the homepage at "https://techglobal-training.com/"
   * Move to the "Practices" header dropdown
   * Click on the "Frontend Testing" header dropdown option
   * Check if the user is navigated to "https://techglobal-training.com/frontend"
   * Click on the "Pagination" card
   * Check if the user is navigated to "https://techglobal-training.com/frontend/pagination"
   * Check if the "Pagination" heading is visible
   * Check if the "World City Populations 2022" heading is visible
   * Check if the paragraph "What are the most populated cities in the world? Here is a list of the top five most populated cities in the world:" is visible
   */

  it('Navigates to the Pagination page and validates its content', () => {
    cy.url().should('eq', 'https://techglobal-training.com/frontend/pagination')
    paginationPage.mainHeading().should('have.text', 'Pagination')
    paginationPage.subHeading().should('have.text', 'World City Populations 2022')
    paginationPage.content().should('be.visible')
  })

  /**
   * Test case: Validate the Pagination Page Next/Previous buttons
   * Visit the homepage at "https://techglobal-training.com/"
   * Move to the "Practices" header dropdown
   * Click on the "Frontend Testing" header dropdown option
   * Check if the user is navigated to "https://techglobal-training.comp/frontend"
   * Click on the "Pagination" card
   * Check if the user is navigated to "https://techglobal-training.comp/frontend/pagination"
   * Check if the "Previous" button is disabled
   * Check if the "Next" button is enabled
   * Click on the "Next" button
   * Check if the "Previous" button is enabled
   * Click on the "Next" button repeatedly until it becomes disabled
   * Check if the "Previous" button is enabled
   * Check if the "Next" button is disabled
   */

  it('Validates the Pagination Page Next/Previous buttons', { tags: ['@smoke'] }, () => {
    cy.url().should('eq', 'https://techglobal-training.com/frontend/pagination')
    paginationPage.previousButton().should('be.disabled')
    paginationPage.nextButton().should('be.enabled')
    paginationPage.nextButton().click()
    paginationPage.previousButton().should('be.enabled')

    paginationPage.clickNextButtonTillDisabled()

    paginationPage.previousButton().should('be.enabled')
    paginationPage.nextButton().should('be.disabled')
    
  })
})
