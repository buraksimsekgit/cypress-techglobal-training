class BasePage {
  // Element selectors
  getLogo = () => cy.get('#logo')
  getNavbar = () => cy.get('#dropdown-button')
  getFrontendOption = () => cy.get('.navbar-brand > .active')
  getDropdownItems = () => cy.get('#dropdown-menu a')
  getAddressAndCopyright = () => cy.get('.has-text-centered p')
  getSocials = () => cy.get('.has-text-centered a')
}

export default BasePage
