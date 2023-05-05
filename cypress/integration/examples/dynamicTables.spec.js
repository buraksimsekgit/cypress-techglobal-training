/// <reference types="Cypress" />

import { default as DynamicTablesPage } from '../../pages/dynamicTablesPage'

describe('Dynamic Table Test', () => {
  const dynamicTablesPage = new DynamicTablesPage()

  beforeEach(() => {
    cy.visitTechglobalTraining()
    cy.contains('Dynamic Tables').click()
  })

  /**
   * Go to https://techglobal-training.netlify.app/
   * Click on “Practices” dropdown in the header
   * Select the “Frontend Testing” option
   * Click on the “Dynamic Tables” card
   * Click the “Add Product” button
   * Enter “2” in the Quantity field
   * Enter “Apple Watch” in the Product field
   * Enter “500” in the Price $ field
   * Click the “Submit” button
   * Verify that a new row has been added to the table with the values “2”, “Apple Watch, “500” and the calculated Total $ value is “1,000"
   * Verify that the Total $ value at the bottom of the table has been updated to reflect the total cost of all the products in the table, including the newly added one.
   */

  it('should add a new product to the table and validate the total', () => {
    // Store the initial table row size and validate it is 3 and store it inside the alias
    dynamicTablesPage.getTableRowSize().then(rowCount => {
      cy.wrap(rowCount).as('tableRowSize')
      expect(rowCount).to.equal(3)
      cy.log(rowCount)
    })

    // store the current total amount before adding a new product and parse it to an int so we can compare it with final total after we add new product
    dynamicTablesPage.getTotalAmount().then(total => {
      cy.wrap(total).as('initialTotal') // Create an alias for the total to use it later
    })

    // Click the "Add Product" button and validate that the modal card is displayed
    dynamicTablesPage.clickAddProductButton()

    // Store products in array to add in a loop and validate it later
    const products = ['2', 'Apple Watch', '500']

    // initially calculate the total amount of the new product from our array of input and multiply quantity with price
    let myProductTotal = Number(products[0]) * Number(products[2])

    // Enter the values for the new product and submit the form
    dynamicTablesPage.enterProductDetails(products)
    dynamicTablesPage.submitProductDetails()

    // Validate that the table row size has increased by 1 after we add new items to our table
    dynamicTablesPage.getTableRowSize().then(newRowCount => {
      cy.get('@tableRowSize').then(initialRowCount => {
        expect(newRowCount).to.equal(initialRowCount + 1)
      })
    })

    // Validate that the calculated Total $ value is on the table cell matches with calculated myProductTotal on line 48
    dynamicTablesPage
      .getCellText(4, 4)
      .extractNumber()
      .then(cellTotal => {
        expect(cellTotal).to.equal(myProductTotal)
      })

    // Validate that a new row has been added to the table with the values in the array we created "2", "Apple Watch", "500"
    dynamicTablesPage.getRowTexts(4).then(rowTexts => {
      cy.log(`The texts in the row are: ${rowTexts}`)

      // Validate the rowTexts array against the products array
      products.forEach((product, index) => {
        expect(rowTexts[index]).to.equal(product)
      })
    })

    // Verify that the Total $ value at the bottom of the table has been updated to reflect the total cost of all the products in the table, including the newly added one.
    dynamicTablesPage
      .gettableTotal()
      .extractNumber()
      .then(updatedTotal => {
        cy.get('@initialTotal').then(initialTotal => {
          const expectedTotal = initialTotal + myProductTotal
          expect(updatedTotal).to.equal(expectedTotal)
        })
      })
  })
})
