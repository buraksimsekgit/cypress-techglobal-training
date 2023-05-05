class AlertPage {
  warningAlertButton = '#warning_alert'
  actionMessage = '#action'

  clickWarningAlertButton() {
    return cy.get(this.warningAlertButton).click()
  }

  validateAlertText(expectedText) {
    cy.on('window:alert', alertText => {
      expect(alertText).to.equal(expectedText)
    })
  }

  clickAlertOkButton() {
    cy.window().then(win => {
      cy.stub(win, 'alert').callsFake(alertText => {
        // eslint-disable-next-line no-undef
        expect(alertText).to.equal(expectedText)
      })
    })
  }

  validateActionMessage(expectedMessage) {
    cy.get(this.actionMessage).should('have.text', expectedMessage)
  }
}

export default AlertPage
