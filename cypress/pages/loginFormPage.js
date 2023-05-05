class LoginFormPage {
  usernameField = () => cy.get('#username')
  passwordField = () => cy.get('#password')
  loginButton = () => cy.get('#login_btn')
  successMessage = () => cy.get('#success_lgn')

  login(username, password) {
    this.usernameField().type(username)
    this.passwordField().type(password)
    this.loginButton().click()
  }
}

export default LoginFormPage
