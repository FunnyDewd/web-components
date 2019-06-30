/// <reference types="Cypress" />
describe('smoke test', function() {
  it("doesn't do much", function() {
    expect(true).to.equal(true)
  })

  it('should load a url', function() {
    cy.visit('https://google.com')
  })
})
