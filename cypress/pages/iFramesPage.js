class IFramesPage {
  iframe = () => cy.get('#form_frame')

  getIFrameBody() {
    return this.iframe().its('0.contentDocument.body')
  }

  getNameFormParagraph() {
    return this.getIFrameBody().find('#name_form > p')
  }

  getInputFields() {
    return this.getIFrameBody().find('.input')
  }

  getSubmitButton() {
    return this.getIFrameBody().find('#submit')
  }

  getResult() {
    return cy.get('#result')
  }

  fillOutForm(name, lastName) {
    this.getNameFormParagraph().should('be.visible')
    this.getInputFields().eq(0).type(name)
    this.getInputFields().eq(1).type(lastName)
    this.getSubmitButton().click()
  }
}

export default IFramesPage
