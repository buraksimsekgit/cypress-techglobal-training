class FileUploadPage {
  getFileUploadInput() {
    return cy.get("#file_upload");
  }

  getUploadButton() {
    return cy.get("#file_submit");
  }

  getResultText() {
    return cy.get("#result");
  }

  clickUploadButton() {
    this.getUploadButton().click();
  }
}

export default FileUploadPage;
