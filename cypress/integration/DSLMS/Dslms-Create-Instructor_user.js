/// <reference types="cypress" />

it('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/users"]').click()
    cy.get('.MuiButton-label').click()
    cy.get('.MuiMenu-list > .MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('TY-BELLO')
    cy.get('#mui-component-select-title').click()
    cy.get('#menu-title > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('agamazealous@mailinator.com')
    cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type ('Zeal')
    cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').type('Bamidele')
    cy.get(':nth-child(6) > .MuiInputBase-root > .MuiInputBase-input').type('Simbi')
    cy.get(':nth-child(7) > .MuiInputBase-root > .MuiInputBase-input').type('09085747700')
    cy.get('#mui-component-select-gender').click()
    cy.get('#menu-gender > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.get(':nth-child(9) > .MuiInputBase-root > .MuiInputBase-input').type('Senior lecturer')
    cy.get('#mui-component-select-faculty').click()
    cy.get('[data-value="17369f07-0a64-4f5e-8782-8704cd7b6a62"]').click()
    cy.get('#mui-component-select-department').click()
    cy.get('[data-value="1c3e126f-c6c3-492e-a694-95c729a4885d"]').click()
    cy.get('.MuiPaper-root > .MuiButton-contained > .MuiButton-label').click()


})