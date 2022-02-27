/// <reference types= "cypress" />


//This function is to describe the test suite
describe("Instagram Login Test suite", function () {
    
    //This function is to describe the test case
    it(`Instagram login`, function () {
    //Visit instagram.
    cy.visit("https://www.instagram.com/");

    cy.get(':nth-child(1) > ._9GP1n > .f0n8F > ._2hvTZ').type('tree');

    cy.get(':nth-child(2) > ._9GP1n > .f0n8F > ._2hvTZ').type('tree123');
   
  });
});