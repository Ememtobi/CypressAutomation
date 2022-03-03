/// <reference types= "cypress" />


//This function is to describe the test suite
describe("Jumia register Test suite", function () {
    
    //This function is to describe the test case
    it(`Jumia register`, function () {
        //Visit jumia.
    cy.visit("https://www.jumia.com.ng/customer/account/create/");

    cy.get('#fi-firstName').type("jack",{force:true});
    cy.get('#fi-lastName').type("john",{force:true});
    cy.get('#fi-email').type("jackuar12@yopmail.com",{force:true});
    cy.get('#fi-password').type("jack123",{force:true});
    cy.get('#fi-phone').type("08000000001",{force:true});
    cy.get('#fi-terms').click({force:true});
    cy.get('.-ptl > .btn').click({force:true})


});
}); 