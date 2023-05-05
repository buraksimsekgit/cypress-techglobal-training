/// <reference types="Cypress" />

import { default as CalendarPage } from '../../pages/calendarPage'

describe('Validate date picker', () => {
  const calendarPage = new CalendarPage()
  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('Calendar').click()
  })
  it('should display selected date in result', { tags: ['@smoke'] }, () => {
    calendarPage.openDatePicker()

    // Storing these dates so we can use it later to validate
    const targetYear = 2024,
      targetMonth = 'May',
      targetDate = 16

    calendarPage.clickNextYearButton(targetYear)
    calendarPage.clickNextMonthButton(targetMonth)
    calendarPage.getDateButton(targetDate).click()

    // Get the day of the week, month, and date for the target date
    const monthIndex = new Date(Date.parse(`${targetMonth} 1, ${targetYear}`)).getMonth()
    const targetDateObj = new Date(targetYear, monthIndex, targetDate)

    // Since format in the result is fixed we need to fix our format to match with the result
    const targetDayOfWeek = new Intl.DateTimeFormat('en-US', {
      weekday: 'short',
    }).format(targetDateObj)
    const targetMonthFormatted = new Intl.DateTimeFormat('en-US', {
      month: 'short',
    }).format(targetDateObj)
    const targetDateFormatted = new Intl.DateTimeFormat('en-US', {
      day: 'numeric',
    }).format(targetDateObj)
    const targetYearFormatted = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
    }).format(targetDateObj)

    // Concatenating the formatted date parts
    const formattedDate = `${targetDayOfWeek} ${targetMonthFormatted} ${targetDateFormatted} ${targetYearFormatted}`

    calendarPage.getResult().should('contain.text', `You have selected ${formattedDate}.`)
  })
})
