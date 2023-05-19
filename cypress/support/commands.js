/* eslint-disable no-undef */
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

/**
 * Visits the application URL specified in the Cypress environment variable `url`,
 * asserts that the page title matches the expected title, and clicks on the
 * "Frontend Development" option in the navbar.
 */
Cypress.Commands.add('visitTechglobalTraining', () => {
  cy.visit(Cypress.env('url'))

  // Check if the title matches the expected title
  cy.title().should('eq', 'Techglobal Training | Home')

  cy.get('#logo').should('be.visible')

  // Click on the "Frontend Development" option in the navbar
  cy.get('.navbar-brand > .active').click()
  cy.get('#frontend-option').click()
})

/**
 * Gets the number of rows in a table.
 *
 * @param {Element} element - The table element to query.
 * @returns {number} - The number of rows in the table.
 */
Cypress.Commands.add('getTableRows', { prevSubject: 'element' }, element => {
  return cy.wrap(element).find('tbody tr').its('length')
})

/**
 * Gets the text content of all cells in a row of a table.
 *
 * @param {string} tableSelector - The selector for the table element.
 * @param {number} rowIndex - The index of the row to query (1-based).
 * @returns {string[]} - An array of strings containing the text content of each cell in the row.
 */
Cypress.Commands.add('getRowTexts', (tableSelector, rowIndex) => {
  return cy
    .get(tableSelector)
    .find(`tbody tr:nth-child(${rowIndex})`)
    .find('td')
    .then($cells => {
      return $cells.toArray().map(cell => cell.textContent.trim())
    })
})

/**
 * Extracts a numeric value from the text content of an element
 * and returns only numbers.
 *
 * @param {Element} element - The element to extract the number from.
 * @returns {number} - The extracted numeric value.
 */
Cypress.Commands.add('extractNumber', { prevSubject: 'element' }, element => {
  return cy
    .wrap(element)
    .invoke('text')
    .then(text => Number(text.replace(/\D/g, '')))
})

/**
 * Gets the text content of a cell in a table.
 *
 * @param {string} tableSelector - The selector for the table element.
 * @param {number} rowIndex - The index of the row containing the cell (1-based).
 * @param {number} columnIndex - The index of the column containing the cell (1-based).
 * @returns {string} - The text content of the specified cell.
 */

Cypress.Commands.add('getCellText', (tableSelector, rowIndex, columnIndex) => {
  return cy.get(tableSelector).find(`tbody tr:nth-child(${rowIndex}) td:nth-child(${columnIndex})`)
})

Cypress.Commands.add('dragTo', { prevSubject: 'element' }, (subject, targetEl) => {
  const dataTransfer = new DataTransfer()
  cy.get(subject).trigger('dragstart', {
    dataTransfer,
  })
  cy.get(subject).trigger('drop', {
    dataTransfer,
  })
})

/**
 * Custom command to check if the given rows are sorted in ascending order.
 * It assumes that the first column (td) of each row contains a numeric value.
 *
 * @example
 * cy.get("selector")
 *   .find("tbody > tr")
 *   .checkSortedAscending();
 */

Cypress.Commands.add('checkSortedAscending', { prevSubject: true }, $rows => {
  let previousValue = -Infinity
  $rows.each((index, element) => {
    const currentValue = parseInt(Cypress.$(element).find('td').eq(0).text().replace(',', ''))
    expect(currentValue).to.be.gte(previousValue)
    previousValue = currentValue
  })
})
