class MultipleWindowsPage {

    getTitle() {
      return cy.title()
    }
  
    clickAppleLink() {
      cy.get('#apple').invoke('removeAttr', 'target').click()
    }
  }
  
  export default MultipleWindowsPage