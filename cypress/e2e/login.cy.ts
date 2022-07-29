// describe('empty spec', () => {
//   it('passes', () => {
//     cy.visit('http://localhost:3000')

//     cy.get('#login').click()

//     cy.origin('https://dev-c1qvok18.us.auth0.com/', () => {
//       cy.get('#1-email').type('chapelexx54@gmail.com')
//       cy.get('input[type="password"]').type('33233233')
//       cy.get('button[type="submit"]').click()
//     })

//   })
// })

context('Index page', () => {
  it("Login and then Add Todo", () => {
    cy.visit("http://localhost:3000")

    const email = "cypresstest123@gmail.com"
    const password = "Cypress123*"

    cy.contains('Login').click()

    cy.contains('Continue with Google').click()

    cy.get('input#identifierId').type(`${email}{enter}`)

  })
})

export { }