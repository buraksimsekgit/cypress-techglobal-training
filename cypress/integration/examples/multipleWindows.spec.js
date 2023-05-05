/// <reference types="Cypress" />

import { default as MultipleWindowsPage } from '../../pages/multipleWindowsPage'

/// <reference types="Cypress" />
/// <reference types="cypress-iframe" />

import 'cypress-iframe'

describe('Techglobal Training website', () => {
  // const multipleWindowsPage = new MultipleWindowsPage()
  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('Multiple Windows').click()
  })

  it('Handling multiple windows', () => {
    cy.title().then(title => {
      expect(title.toLowerCase()).to.contain('techglobal')
      cy.log(+title)
    })

    cy.get('#apple').invoke('removeAttr', 'target').click()
  })
})
