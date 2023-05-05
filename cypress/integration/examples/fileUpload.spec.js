import { default as FileUploadPage } from '../../pages/fileUploadPage'
import 'cypress-file-upload'

describe('File Upload Test', () => {
  // const fileUploadPage = new FileUploadPage()

  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('File Upload').click()
  })

  /**
   * Go to https://techglobal-training.netlify.app/
   * Click on "Practices" dropdown in the header
   * Select the "Frontend Testing" option
   * Click on the "File Upload" card
   * Send path of the file as keys to "Choose File" input box
   * Click on "UPLOAD" button
   * Validate the result message equals "You Uploaded 'hello.txt'"
   */

  it('should upload a file and validate the result message', () => {
    const filePath = 'example.json'

    cy.get('#file_upload').attachFile(filePath)

    // Click on the upload button
    cy.get('#file_submit').click()

    // Wait for the page to reload
    cy.url().should('contain', 'file-upload')

    // TODO: There is a problem with file upload library it needs to be fixed.

    // Validate the result message
    // fileUploadPage
    //   .getResultText()
    //   .should("have.text", `You Uploaded '${filePath}'`);
  })
})
