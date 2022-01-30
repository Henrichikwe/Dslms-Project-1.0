/// <reference types="cypress" />
describe('DSLMS APP', () =>{

    beforeEach(() =>{
        cy.login('havardhs@mailinator.com','P@ssw0rd12345')
    })
    })
    it('should actually be assessible', function(){
        cy.visit ('http://havard.deltalms.prunedge.org/')
    })
   

//upload files
it('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    //Assert that the app under test contains the right url.
    cy.url().should('include','http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/users"]').click()
    cy.get('.jss160').click()
    cy.get('.MuiGrid-grid-lg-4 > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('#tab-1 > .MuiTab-wrapper').click()
   // cy.get('.file-input-cover-caption').click()
    //cy.contains('Drop your files here or click here to upload').click()
    cy.get('.file-input-cover-icon').click()
})
// academic session
it.only('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    //Assert that the app under test contains the right url.
    cy.url().should('include','http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('.MuiIconButton-label > .MuiAvatar-root > .MuiAvatar-img').click()
    cy.get('.jss59 > :nth-child(3) > :nth-child(1)').click()
    cy.get('.MuiButton-label').click()
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Mason')
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('ilkson')
    cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type('09085783388')
    cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').type('Yul')
    cy.get(':nth-child(6) > .MuiInputBase-root > .MuiInputBase-input').type('Bahamas')
    cy.get(':nth-child(9) > .MuiInputBase-root > .MuiInputBase-input').type('New zealand')
    cy.get(':nth-child(10) > .MuiInputBase-root > .MuiInputBase-input').type('1992-08-12')
    cy.get('.MuiButton-contained').click()
    cy.url().should('contain','http://havard.deltalms.prunedge.org/')
    //cy.contains('School').click()
   // cy.contains('Edit School').click()
   // cy.get('.MuiButton-label > .MuiPaper-root > .MuiBox-root > .MuiTypography-root').click()
   // cy.get('.MuiButtonBase-root MuiIconButton-root jss2180 MuiCheckbox-root MuiCheckbox-colorPrimary jss2181 Mui-checked MuiIconButton-colorPrimaryg').click()
})

