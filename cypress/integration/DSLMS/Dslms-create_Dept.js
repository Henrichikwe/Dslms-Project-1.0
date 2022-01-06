/// <reference types="cypress" />

it('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/institutions/21f6110d-e412-40ff-aae4-8705a9998a9a"]').click()
    cy.get('.jss227').click()
    cy.contains('Add Department').click()
    cy.get('form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Aramaic Knowledge')
    cy.get('.jss415 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('AK')
    cy.get('.jss416 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('This is Aramaic Department')
    cy.contains('Create').click()
    
})