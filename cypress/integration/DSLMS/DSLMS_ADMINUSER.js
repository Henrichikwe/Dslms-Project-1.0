/// <reference types="cypress" />
describe('DSLMS APP', () =>{

beforeEach(() =>{
    cy.login('havardhs@mailinator.com','P@ssw0rd12345')
})
})
it('should actually be assessible', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
})
  //User creation (Admin) by Admin
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
    cy.get('.jss254 > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Peterbams@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('Bamidele')
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('Peters')
    cy.get('#mui-component-select-faculty').click()
    cy.get('[data-value="4acae1a9-f6f0-44e4-b0e2-b0e8c253a884"]').click()
    cy.get('.MuiPaper-root > .MuiButton-contained > .MuiButton-label').click()
    //Asserts that the submit button is visible
    cy.get('.MuiPaper-root > .MuiButton-contained > .MuiButton-label').should('be.visible')
    cy.get('#outlined-search').type('Peters')
    cy.url().should('contain', 'http://havard.deltalms.prunedge.org/')
})
//Edit profile info
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
})
//Edit Admin information
it.only('Dslms', function(){
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
//User creation(Lecturer) by Admin
it('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/users"]').click()
    cy.get('.MuiButton-label').click()
    cy.get('.MuiMenu-list > .MuiList-root > :nth-child(2) > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('Gita-987')
    cy.get('#mui-component-select-title').click()
    cy.get('#menu-title > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('giwalawani@mailinator.com')
    cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type ('Giwa')
    cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').type('mahowa')
    cy.get(':nth-child(6) > .MuiInputBase-root > .MuiInputBase-input').type('Damin')
    cy.get(':nth-child(7) > .MuiInputBase-root > .MuiInputBase-input').type('09085092700')
    cy.get('#mui-component-select-gender').click()
    cy.get('#menu-gender > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.get(':nth-child(9) > .MuiInputBase-root > .MuiInputBase-input').type('Senior lecturer')
    cy.get('#mui-component-select-faculty').click()
    cy.get('[data-value="17369f07-0a64-4f5e-8782-8704cd7b6a62"]').click()
    cy.get('#mui-component-select-department').click()
    cy.get('[data-value="1c3e126f-c6c3-492e-a694-95c729a4885d"]').click()
    cy.get('.MuiPaper-root > .MuiButton-contained > .MuiButton-label').click()
    cy.get('#outlined-search').type('Giwa')
    cy.url().should('contain', 'http://havard.deltalms.prunedge.org/')

})
//User creation (learner) by Admin
it('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/users"]').click()
    cy.get('.MuiButton-label').click()
    cy.get(':nth-child(4) > .MuiListItemText-root > .MuiTypography-root').click()
    cy.get('#mui-component-select-title').click()
    cy.get('#menu-title > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('hamidboyle@mailinator.com')
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('BOYLE')
    cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type('HAN')
    cy.get(':nth-child(5) > .MuiInputBase-root > .MuiInputBase-input').type('sakem')
    cy.get('#mui-component-select-gender').click()
    cy.get('#menu-gender > .MuiPaper-root > .MuiList-root > [tabindex="0"]').click()
    cy.get(':nth-child(7) > .MuiInputBase-root > .MuiInputBase-input').type('08089300988')
    cy.get(':nth-child(8) > .MuiInputBase-root > .MuiInputBase-input').type('JS-PINK-8711')
    cy.get('#mui-component-select-program').click()
    cy.get('[data-value="10bba7ac-1c42-427e-aa14-2267fb6e1f37"]').click()
    cy.get('#mui-component-select-programType').click()
    cy.get('.MuiPaper-root > .MuiList-root > .MuiButtonBase-root').click()
    cy.get('#mui-component-select-faculty').click()
    cy.get('[data-value="a5c6f254-fc24-491f-ab76-18d1906f5ec1"]').click()
    cy.get('#mui-component-select-level').click()
    cy.get('[data-value="c8dea536-b7c3-4dce-a5ba-252b1c7b6547"]').click()
    cy.get('#mui-component-select-department').click()
    cy.get('.MuiPaper-root > .MuiList-root > .MuiButtonBase-root').click()
    cy.get('.MuiPaper-root > .MuiButton-contained > .MuiButton-label').click()
    cy.get('#outlined-search').type('Boyle')
    cy.url().should('contain', 'http://havard.deltalms.prunedge.org/')
})
//faculty creation by Admin
it('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/institutions/21f6110d-e412-40ff-aae4-8705a9998a9a"]').click()
    cy.contains('Add Faculty').click()
    cy.get('form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('GEOGRAPHY')
    cy.get('.jss314 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('GEO')
    cy.get('.jss315 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('This is GEOGRAPHY')
    cy.get('.MuiPaper-root > .MuiButton-contained > .MuiButton-label').click()

})
//department creation by Admin
it('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/institutions/21f6110d-e412-40ff-aae4-8705a9998a9a"]').click()
    cy.get('.jss227').click()
    cy.contains('Add Department').click()
    cy.get('form > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('FRANCIS')
    cy.get('.jss415 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('FRENCH')
    cy.get('.jss416 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('This is FRENCH Department')
    cy.contains('Create').click()
    
})
//Category creation by Admin
it('Dslms', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.contains('Courses').click()
    cy.get('.MuiButton-outlined > .MuiButton-label').click()
    cy.get('[style="margin: 10px 0px;"] > .MuiInputBase-root > .MuiInputBase-input').type('CategoryFPY')
    cy.get('.MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Quantom Mechanism 6')
    cy.get('.MuiPaper-root > .MuiButton-contained > .MuiButton-label').click()
})

//Edit course category by Admin
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
   
// course creation by Admin
it('Dslms', function(){

    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('havardhs@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.contains('Courses').click()
    cy.get('.jss123 > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('.MuiGrid-grid-lg-4 > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('.MuiGrid-container > :nth-child(1) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('ATOMIC PHYSICS 5')
    cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('ATOM-PHY')
    cy.get(':nth-child(3) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('3')
    cy.get('#mui-component-select-faculty').click()
    cy.get('[data-value="206c5a83-2378-4359-94a7-2bada8dfda10"]').click()
    cy.get('#mui-component-select-department').click()
    cy.get('[data-value="69de7b6a-0cc6-4149-af62-46922246db5a"]').click()
    cy.get('#mui-component-select-level').click()
    cy.get('[data-value="3e506964-aec1-4057-97d0-72b8690ba77c"]').click()
    cy.get('#lecturers-autocomplete').click()
    cy.get('#lecturers-autocomplete-option-1').click()
    cy.get('.MuiButton-contained > .MuiButton-label').click()
})
//Export dashboard report (lecturer)
it('Dslms2', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('angelo@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('.jss67 > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('.MuiPaper-root > .MuiList-root > .MuiButtonBase-root').click()
    cy.get('.MuiFormGroup-root > :nth-child(2) > .MuiTypography-root').click()
    cy.get('a > .MuiButtonBase-root > .MuiButton-label').click()
})
//Create assessment (lecturer)
it('Dslms2', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('angelo@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/courses"]').click()
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardMedia-root').click()
    cy.get(':nth-child(5) > .MuiTab-wrapper').click()
    cy.get('.jss308 > .MuiButtonBase-root > .MuiButton-label > .MuiButton-startIcon > .MuiSvgIcon-root').click()
    cy.get('.jss368 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('PrjMGT 339')
    cy.get('.jss390 > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label > .MuiButton-startIcon > .MuiSvgIcon-root').click()
    cy.get('.public-DraftStyleDefault-block').type('What is chain marketing')
    cy.get('.jss427 > .MuiBox-root > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('12')
    cy.get('.MuiPaper-root > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('.jss402 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('3')
    cy.get('.jss404 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('2022-01-18')
    cy.get('.jss405 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('17:09')
    cy.get('.jss406 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('2022-01-25')
    cy.get('.jss407 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('17:09')
    cy.get('.jss414 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('10')
    cy.get('.header-btns > .MuiButton-contained > .MuiButton-label').click()
  
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
    cy.get('.jss373 > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('PRJ MGT 222')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('How do you SCRUM BASED project')
    cy.get('.jss380 > :nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('10')
    cy.get(':nth-child(3) > .MuiInputBase-root > .MuiInputBase-input').type('2022-01-18')
    cy.get(':nth-child(4) > .MuiInputBase-root > .MuiInputBase-input').type('2022-01-25')
    cy.get('.header-btns > .MuiButton-contained > .MuiButton-label').click()

})
// Edit Course prerequisite (lecturer)
it('Dslms2', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('angelo@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/courses"]').click()
    cy.get(':nth-child(1) > .MuiPaper-root > .MuiCardMedia-root').click()
    cy.get('.MuiButton-outlined').click()
    cy.get('#vertical-tab-1 > .MuiTab-wrapper').click()
    cy.get(':nth-child(8) > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('.jss419 > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('.jss421 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Project management volume 3')
    cy.get('.jss420 > .MuiButtonBase-root > .MuiButton-label').click()

})
//Add Announcement by Lecturer
it('Dslms2', function(){
    cy.visit ('http://havard.deltalms.prunedge.org/')
    cy.get(':nth-child(1) > .MuiInputBase-root > .MuiInputBase-input').type('angelo@mailinator.com')
    cy.get(':nth-child(2) > .MuiInputBase-root > .MuiInputBase-input').type('P@ssw0rd12345')
    cy.get('.MuiButton-label').click()
    cy.get('[href="/announcement"]').click()
    cy.get('.MuiGrid-grid-lg-4 > .MuiBox-root > .MuiButtonBase-root > .MuiButton-label').click()
    cy.get('.jss201 > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Boot camp for Junior devs 3')
    cy.get('.jss202 > .MuiAutocomplete-root > .MuiFormControl-root > .MuiInputBase-root').type('Science {enter}')
    cy.get('.jss204').type('Bootcamp')
    cy.get('.MuiDialogActions-root > .MuiButtonBase-root > .MuiButton-label').click()
    cy.contains('Post').should('be.enabled')
})