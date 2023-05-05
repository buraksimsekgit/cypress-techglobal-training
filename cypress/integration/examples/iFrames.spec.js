/// <reference types="Cypress" />

import { default as IFramesPage } from '../../pages/iFramesPage'
import { IFramesTexts } from '../../enums/enums'

describe('IFrames Page', () => {
  const iFramesPage = new IFramesPage()

  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('IFrames').click()
  })

  it('should fill out and submit the form inside the iframe', () => {
    iFramesPage.fillOutForm('John', 'Doe')
    iFramesPage.getResult().should('have.text', IFramesTexts.RESULT_MESSAGE)
  })
})
