context('Index page', () => {
  it("Starts in land page and redirect to login", () => {
    cy.visit("http://localhost:3000")

    cy.get('#githubprofile').should('have.text', 'Codelexx')

    cy.get('#login').click()

    cy.contains('Continue with Google').should('have.length', '1')

  })
})

export { }