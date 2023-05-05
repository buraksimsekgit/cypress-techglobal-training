/// <reference types="Cypress" />
import { default as FileDownloadPage } from '../../pages/fileDownloadPage'

describe('File Download Test', () => {
  const fileDownloadPage = new FileDownloadPage()

  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('File Download').click()
  })

  /**
   * Go to https://techglobal-training.com/
   * Click on “Practices” dropdown in the header
   * Select the “Frontend Testing” option
   * Click on the “File Download” card
   * Click on the “TechGlobal School.pptx” file
   * TEST that the file is downloaded in your Downloads file
   */

  it('should download TechGlobal School.pptx file', () => {
    fileDownloadPage.downloadFile('TechGlobal School.pptx')
    fileDownloadPage.assertFileDownloaded('SampleText.txt')
  })
})
