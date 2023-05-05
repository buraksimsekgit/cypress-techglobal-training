/// <reference types="Cypress" />

describe('Verify quantity sort functionality of sortable tables', () => {
  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('Sortable Tables').click()
  })

  /**
   * Go to https://techglobal-training.com/
   * Click on "Practices" dropdown in the header
   * Select the "Frontend Testing" option
   * Click on the "Sortable Tables" card
   * Click on the Quantity sort button to toggle Ascending Order
   * Verify that the Quantity column of the table is sorted in ascending order
   */

  it('should sort the quantity column in ascending order', () => {
    cy.get('#quantity_asc').click()

    // Click on the Quantity sort button to toggle Ascending Order
    cy.get('#quantity_asc').click()

    // Verify that the Quantity column of the table is sorted in ascending order
    cy.get('.table').find('tbody > tr').checkSortedAscending()
  })
})
