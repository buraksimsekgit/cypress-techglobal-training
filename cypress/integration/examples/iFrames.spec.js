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
    const firstName = 'John'
    const lastName = 'Doe'
    iFramesPage.fillOutForm(firstName, lastName)
    const expectedText = `${IFramesTexts.RESULT_MESSAGE}`.replace('{name}', `${firstName} ${lastName}`)
    iFramesPage.getResult().should('have.text', expectedText)
  })
})
