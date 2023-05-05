class PaginationPage {

  mainHeading() {
    return cy.get("#main_heading");
  }

  subHeading() {
    return cy.get("#sub_heading");
  }

  content() {
    return cy.get("#content");
  }

  previousButton() {
    return cy.get("#previous");
  }

  nextButton() {
    return cy.get("#next");
  }

  /**
   * Clicks the "Next" button repeatedly until it becomes disabled.
   * This function uses recursion to continuously click the button and
   * adds a short delay between each click for better test stability.
   */

  clickNextButtonTillDisabled() {
    this.nextButton().then(($nextBtn) => {
      if ($nextBtn.is(":enabled")) {
        cy.wrap($nextBtn).click();
        cy.wait(500);
        this.clickNextButtonTillDisabled();
      }
    });
  }
}

export default PaginationPage;
