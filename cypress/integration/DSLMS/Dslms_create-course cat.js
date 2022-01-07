/// <reference types="cypress" />
beforeEach(() =>{
})
it('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.contains('Courses').click()
    cy.get('.MuiButton-outlined > .MuiButton-label').click()
    cy.get('[style="margin: 10px 0px;"] > .MuiInputBase-root > .MuiInputBase-input').type('CategoryQST')
    cy.get('.MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Quantom Mechanism 1')
    cy.get('.MuiPaper-root > .MuiButton-contained > .MuiButton-label').click()
})
