

describe('San Lorenzo .com', () => {
  it('menu', () => {
    cy.visit('https://sanlorenzo.com.ar/')
    cy.get('span.font-weight-normal').should('be.visible')
  })



})