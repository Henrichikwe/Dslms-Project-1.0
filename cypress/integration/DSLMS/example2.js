/// <reference types="cypress" />
describe('DSLMS APP', () =>{

    beforeEach(() =>{
        cy.login('havardhs@mailinator.com','P@ssw0rd12345')
    })
    })
    it('should actually be assessible', function(){
        cy.visit ('http://havard.deltalms.prunedge.org/')
    })
   
   
it('Dslms2', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/users"]').click()
    cy.contains('Administrators').click()
    cy.contains('New Administrator').click()
    cy.get('.jss254 > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Cyrilfabulous@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Cyril')
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('Fabulous')
    cy.get('#mui-component-select-faculty').click()
    cy.get('[data-value="b771159f-263b-4fb4-b209-f2aa74338810"]').click()
    cy.get('.MuiPaper-root > .MuiButton-contained > .MuiButton-label').click()
    cy.get('#outlined-search').type('Cyril')
    cy.url().should('contain', 'http://havard.deltalms.prunedge.org/')
})

it('Dslms2', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('angelo@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/courses"]').click()
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardMedia-root').click()
    cy.get(':nth-child(5) > .MuiTab-wrapper').click()
    cy.get('.jss308 > .MuiButtonBase-root > .MuiButton-label > .MuiButton-startIcon > .MuiSvgIcon-root').click()
    cy.get('.jss368 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('PrjMGT 379')
    cy.get('.jss390 > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label > .MuiButton-startIcon > .MuiSvgIcon-root').click()
    cy.get('.public-DraftStyleDefault-block').type('What is chain marketing')
    cy.get('.jss427 > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('12')
    cy.get('.MuiPaper-root > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('.jss402 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('3')
    cy.get('.jss404 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('2022-01-25')
    cy.get('.jss405 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('17:09')
    cy.get('.jss406 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('2022-01-28')
    cy.get('.jss407 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('17:09')
    cy.get('.jss414 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('10')
    cy.get('.header-btns > .MuiButton-contained > .MuiButton-label').click()

})

it('Dslms2', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('angelo@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/library"]').click()
    cy.get('.jss232 > .MuiGrid-container > :nth-child(2) > .MuiPaper-root').click()
    cy.get('.jss461 > .MuiBox-root > .MuiButtonBase-root').click()

})

it('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.contains('Courses').click()
    cy.get(':nth-child(1) > .MuiAccordionSummary-root > .MuiButtonBase-root > .MuiIconButton-label > .MuiSvgIcon-root').click()
    cy.get('#fe69c476-fac8-41ae-bb0b-381c12f1baf4 > .MuiAccordionDetails-root > .MuiGrid-container > .jss143 > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('[style="margin: 10px 0px;"] > .MuiInputBase-root > .MuiInputBase-input').clear().type('CATEGORY-TP')
    cy.get('.MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear().type('Quantome mechanism-8')
    cy.get('.MuiPaper-root > .MuiButton-contained > .MuiButton-label').click()
})

it('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    //Assert that the app under test contains the right url.
    cy.url().should('include','http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/users"]').click()
    cy.get('.jss160').click()
    cy.get(':nth-child(1) > .MuiTableCell-alignRight > .MuiSvgIcon-root').click()
    cy.get('.MuiList-root > [tabindex="-1"]').click()
    cy.get('.jss254 > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').clear().type('cyrilgeorge@mailinator.com')
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').clear().type('George')
    cy.get('.MuiPaper-root > .MuiButton-contained > .MuiButton-label').click()
   })

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
    cy.get('.jss254 > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Peterolawale@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Olawale')
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('Peters')
    cy.get('#mui-component-select-faculty').select('Applied Physics').should('have.id','f0dce382-27fd-4816-b4d0-3dcd606a359e')
    cy.get('.MuiPaper-root > .MuiButton-contained > .MuiButton-label').click()
      //Asserts that the submit button is visible
     cy.get('#outlined-search').type('Peters')
     cy.url().should('contain', 'http://havard.deltalms.prunedge.org/')
     
    
   
})


// create Assignemnt (lecturer)
it('Dslms2', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('angelo@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/courses"]').click()
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardMedia-root').click()
    cy.get(':nth-child(4) > .MuiTab-wrapper').click()
    cy.get('.jss308 > .MuiButtonBase-root > .MuiButton-label > .MuiButton-startIcon > .MuiSvgIcon-root > path').click()
    cy.get('.jss397 > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Project management Assignment 2')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Waterfall methodology')
    cy.get('.jss404 > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('10')
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('2022-01-28')
    cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type('2022-01-29')
    cy.get('.header-btns > .MuiButton-contained > .MuiButton-label').click()
})

it('Dslms2', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('angelo@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/courses"]').click()
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardMedia-root').click()
    cy.get(':nth-child(4) > .MuiTab-wrapper').click()
    cy.get('.jss356 > :nth-child(1)').click()
    cy.get('.MuiButton-outlined').click()
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').clear().type('Waterfall Methodology')
    cy.get('.header-btns > .MuiButton-contained').click()

})

it('Dslms2', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('angelo@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/live-session"]').click()
    cy.get('.MuiGrid-grid-lg-4 > .MuiBox-root > .MuiButtonBase-root').click()
    cy.get('.MuiGrid-container > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Boot camp for beginners')
    //cy.get('.jss336 > [style="margin-right: 20px;"] > .MuiInputBase-root > #date').type("2022-01-28")
    //cy.get('.jss336 > :nth-child(2) > .MuiInputBase-root > #time').type('11:30')
    //cy.get('.jss338 > [style="margin-right: 20px;"] > .MuiInputBase-root > #date').type("2022-01-30")
    //cy.get('.jss338 > :nth-child(2) > .MuiInputBase-root > #time').type('11:50')
    cy.get('.MuiAutocomplete-popupIndicator > .MuiIconButton-label > .MuiSvgIcon-root').type('Computer Science {enter}')
    cy.get(':nth-child(6) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Webinar')
    cy.get('.header-btns > .MuiButtonBase-root').click()
    

})

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

it.only('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    //Assert that the app under test contains the right url.
    cy.url().should('include','http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.contains('School').click()
    cy.contains('Edit School').click()
    cy.get('.MuiButton-label > .MuiPaper-root > .MuiBox-root > .MuiTypography-root').click()
    cy.get('.MuiButtonBase-root MuiIconButton-root jss2180 MuiCheckbox-root MuiCheckbox-colorPrimary jss2181 Mui-checked MuiIconButton-colorPrimary').click()
})