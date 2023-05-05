class CalendarPage {
  openDatePicker() {
    cy.get("button[class*='_cal']").click()
  }

  getNextYearButton() {
    return cy.get("button[class*='_next2']")
  }

  getNextMonthButton() {
    return cy.get("button[class*='_next-']")
  }

  getYearText() {
    return cy.get("span[class*='label']")
  }

  getDateButton(date) {
    return cy.get("button[class*='__day']").contains(date)
  }

  getResult() {
    return cy.get('#result')
  }

  /**
   * Click the next year button in the date picker until the target year is displayed
   * @param {number} targetYear - The year to be displayed in the date picker
   */

  clickNextYearButton(targetYear) {
    this.getYearText().then($yearText => {
      const yearString = $yearText.text().match(/\d+/g)
      const year = yearString ? Number(yearString[0]) : 0

      if (year < targetYear) {
        this.getNextYearButton()
          .click()
          .then(() => {
            cy.wait(500)
            this.clickNextYearButton(targetYear)
          })
      }
    })
  }

  /**
   * Click the next month button in the date picker until the target month is displayed
   * @param {string} targetMonth - The month to be displayed in the date picker (e.g. "May")
   */

  clickNextMonthButton(targetMonth) {
    this.getYearText().then($monthYearText => {
      const month = $monthYearText.text().split(' ')[0]

      if (month !== targetMonth) {
        this.getNextMonthButton()
          .click()
          .then(() => {
            cy.wait(500)
            this.clickNextMonthButton(targetMonth)
          })
      }
    })
  }
}

export default CalendarPage
