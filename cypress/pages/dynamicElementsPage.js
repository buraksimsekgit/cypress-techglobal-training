class DynamicElementsPage {
  getDynamicElements() {
    return cy.get('p[id^="box_1_"], p[id^="box_2_"]')
  }

  validateDynamicElementsVisibilityAndText() {
    this.getDynamicElements()
      .should('have.length', 2)
      .each(element => {
        expect(element).to.be.visible
        const elementText = element.text().trim()

        if (elementText === 'Box 1') {
          expect(elementText).to.equal('Box 1')
        } else if (elementText === 'Box 2') {
          expect(elementText).to.equal('Box 2')
        } else {
          throw new Error('Unexpected element text')
        }
      })
  }
}

export default DynamicElementsPage
