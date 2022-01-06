/// <reference types="cypress" />

it('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/institutions/21f6110d-e412-40ff-aae4-8705a9998a9a"]').click()
    cy.contains('Add Faculty').click()
    cy.get('form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('In-Organic chemistry')
    cy.get('.jss314 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('INORG')
    cy.get('.jss315 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('This is in-Organic Chemistry')
    cy.get('.MuiPaper-root > .MuiButton-contained > .MuiButton-label').click()

})