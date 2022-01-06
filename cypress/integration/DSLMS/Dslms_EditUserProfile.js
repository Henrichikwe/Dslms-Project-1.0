/// <reference types="cypress" />

it('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('.MuiIconButton-label > .MuiAvatar-root > .MuiAvatar-img').click()
    cy.get(':nth-child(3) > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root')
          .should('contain', 'Edit Profile')
    cy.get(':nth-child(3) > :nth-child(1) > .MuiListItemText-root > .MuiTypography-root').click()
    cy.contains('Edit').click()
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Maven')
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('Havard')
    cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type('08098757411')
    cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').type('Timpre')
    cy.get(':nth-child(6) > .MuiInputBase-root > .MuiInputBase-input').type('New Jersey, Nigeria')
    cy.get(':nth-child(10) > .MuiInputBase-root > .MuiInputBase-input').type('2020-01-01')
    cy.get('.MuiButton-contained > .MuiButton-label').click()


})