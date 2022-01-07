/// <reference types="cypress" />
beforeEach(() =>{
})
it('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/users"]').click()
    cy.get('.jss160').click()
    cy.get('.MuiGrid-grid-lg-4 > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('.jss254 > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Helenjossy@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Helen')
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('Jossy')
    cy.get('#mui-component-select-faculty').click()
    cy.get('[data-value="4acae1a9-f6f0-44e4-b0e2-b0e8c253a884"]').click()
    cy.get('.MuiPaper-root > .MuiButton-contained > .MuiButton-label').click()

})