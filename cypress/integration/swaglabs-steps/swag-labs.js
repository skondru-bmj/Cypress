import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
Given('I visit SwagLabs', () => {
    cy.visit('https://www.saucedemo.com/')
});
When('I login as a secret user', () => {
    cy.get('#user-name')
        .type('standard_user')
        .get('#password')
        .type(Cypress.env('*****'))
        .get('form')
        .submit();
});
Then('I should see Products', () => {
    cy.contains('.product_label', 'Products');
});
Given('I sort the products by Price high to low', () => {
    cy.get('.product_sort_container').select('hilo')
});
Given('Add the two cheapest products to my basket', () => {
    cy.get(Cypress.env('First_Cheapest_product')).click()
      .get(Cypress.env('Second_Cheapest_product')).click();
});
When('I Open the basket', () => {
    cy.get('#shopping_cart_container').click();
});
When('Remove the cheapest product from my basket and Checkout', () => {
    cy.get(Cypress.env('First_Basket_product')).then(($price1) => {
        const price1 = parseFloat($price1.text())
    cy.get(Cypress.env('Second_Basket_product')).then(($price2) => {
        const price2 = parseFloat($price2.text())
        expect(price2).to.be.greaterThan(price1)
            if (price1 < price2) {
                cy.get(Cypress.env('First_Basket_product_remove')).click()
            } else {
                cy.get(Cypress.env('Second_Basket_product_remove')).click()

            }
        })
    })
});
Then('I should Finish on the page where you need to enter your name and postal code', () => {
    cy.get('.btn_action').click()
      .get('#first-name').should('be.visible')
      .get('#last-name').should('be.visible')
      .get('#postal-code').should('be.visible');
});           
 