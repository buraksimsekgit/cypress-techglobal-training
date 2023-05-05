/// <reference types="Cypress" />

import { default as LoginFormPage } from '../../pages/loginFormPage'

describe('Techglobal Training website', () => {
  const loginFormPage = new LoginFormPage()

  before(function () {
    cy.fixture('example').then(function (data) {
      const { name, password } = data
      this.name = name
      this.password = password
    })
  })

  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('Login Form').click()
  })

  /**
   * Test Case: Validate Dropdowns Functionality on TechGlobal Training Page
   * Go to https://techglobal-training.com/
   * Click on the "Practices" dropdown in the header
   * Select the "Frontend Testing" option
   * Click on the "Login Page" card
   * Enter "TechGlobal" in the username field
   * Enter "Test1234" in the username field
   * Validate result message displays "You are logged in"
   */

  it('should display the logo and navigate to the frontend development page', function () {
    loginFormPage.login(this.name, this.password)
    cy.wait(1000)
    loginFormPage.successMessage().should('have.text', 'You are logged in')
  })
})
