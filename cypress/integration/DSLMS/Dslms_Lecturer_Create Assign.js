/// <reference types="cypress" />

it('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Feliciavickky@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.contains('Course').click()
    cy.get('.jss323 > .MuiBox-root').click()
    cy.get(':nth-child(4) > .MuiTab-wrapper').click()
    cy.get('.jss453 > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('.jss482 > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Law 109')

})