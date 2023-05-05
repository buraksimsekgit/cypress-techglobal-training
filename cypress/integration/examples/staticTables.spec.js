/// <reference types="Cypress" />

import { default as StaticTablesPage } from '../../pages/staticTablesPage'

describe('Techglobal Training website', () => {
  const staticTablesPage = new StaticTablesPage()

  before(function () {
    cy.fixture('example').then(function (data) {
      const { staticTableRows } = data
      this.staticTableRows = staticTableRows
    })
  })

  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('Static Tables').click()
  })

  /**
   * TEST 4
   * Go to https://techglobal-training.netlify.app/
   * Click on "Practices" dropdown in the header
   * Select the "Frontend Testing" option
   * Click on the "Static Tables" card
   * Check that the entire table has the correct values for "Rank", "Company", "Employees", and "Country"
   */

  it('Handling multiple windows', function () {
    staticTablesPage.validateTableData(this.staticTableRows)
  })
})
