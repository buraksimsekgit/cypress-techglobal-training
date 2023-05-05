class ActionsPage {
  clickButton() {
    return cy.get('#click')
  }

  rightClickButton() {
    return cy.get('#right-click')
  }

  doubleClickButton() {
    return cy.get('#double-click')
  }

  clickResult() {
    return cy.get('#click_result')
  }

  rightClickResult() {
    return cy.get('#right_click_result')
  }

  doubleClickResult() {
    return cy.get('#double_click_result')
  }

  dragMeBox() {
    return cy.get('#drag_element')
  }

  dropElement() {
    return cy.get('#drop_element')
  }

  dragAndDropResult() {
    return cy.get('#drag_and_drop_result')
  }

  inputBox() {
    return cy.get('#input_box')
  }
}

export default ActionsPage
