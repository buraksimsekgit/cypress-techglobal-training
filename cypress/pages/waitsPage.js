class WaitsPage {
  redBoxButton() {
    return cy.get('#red')
  }

  redBox(options) {
    return cy.get("div[class*='red_box']", options)
  }

  blueBoxButton() {
    return cy.get('#blue')
  }

  blueBox(options) {
    return cy.get("div[class*='blue_box']", options)
  }
}

export default WaitsPage
