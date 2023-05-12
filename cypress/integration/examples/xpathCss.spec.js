/// <reference types="Cypress" />

import { default as XpathCssPage } from '../../pages/xpathCssPage'

describe('Techglobal Training website', () => {
  const xpathCssPage = new XpathCssPage()

  before(function () {
    cy.fixture('example').then(function (data) {
      const { languages } = data
      this.languages = languages
    })
  })

  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('Xpath-CSS Locators').click()
  })

  it('should display the logo and navigate to the frontend development page', function () {
    cy.get(':nth-child(1) > :nth-child(1) > ul > li').as('languages')

    cy.get('@languages')
      .invoke('text')
      .then(text => {
        cy.log(text)
      })

    for (let i = 0; i < this.languages.length; i++) {
      cy.get('@languages').eq(i).should('have.text', this.languages[i])
    }
  })
})
