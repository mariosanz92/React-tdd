
describe('adding restaurant', () => {
  it('display the restaurant in the list', () => {
    const restaurantName = 'Solynata';

    cy.visit('http://localhost:1234');

    cy.get('[data-set="addRestaurantButton"]')
      .click();

    cy.get('[data-set="newRestaurantName"]')
      .type(restaurantName);

    cy.get('[data-set="saveNewRestaurantButton"]')
      .click();

    cy.contains(restaurantName);
  });
});
