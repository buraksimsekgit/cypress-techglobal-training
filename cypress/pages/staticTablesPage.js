class StaticTablesPage {
  tableRows = 'tbody > tr'

  validateTableData(validRowTexts) {
    cy.get(this.tableRows).each(($row, rowIndex) => {
      cy.wrap($row)
        .find('td')
        .each(($cell, cellIndex) => {
          const cellText = $cell.text().trim()
          const validText = validRowTexts[rowIndex][cellIndex]
          expect(cellText).to.equal(validText)
        })
    })
  }
}

export default StaticTablesPage
