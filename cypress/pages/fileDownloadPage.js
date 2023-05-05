class FileDownloadPage {
  downloadFile(fileName) {
    cy.contains(fileName).click()
  }

  assertFileDownloaded(fileName) {
    cy.wait(1000)
    cy.readFile(`cypress/downloads/${fileName}`)
  }
}

export default FileDownloadPage
