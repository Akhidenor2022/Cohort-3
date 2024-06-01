const { type, data } = require("cypress/types/jquery")

describe('Signup Assignment Test Scenario', () => {
  it('User should be able to signup successful with all required and optional fields', () => {
    cy.visit('/')
    cy.get('body > div > header > div:nth-child(1) > div > div.flex.gap-10.bp-1000\:hidden > div.sc-dcJsrY.iFUjrt > button').should('be.visible).click'());
    cy.get(data.fullNameField).should('be.visible').type('Isaac Jones');
    cy.get(data.businessname).should('be.visible').type('FunTecch Enterprise');
    cy.get(data.businessemail).should('be.visible').type('funstart@yopmail.com');
    cy.get(data.businessphonenumber).should('be.visible').type('0906644335');
    cy.get(data.#businessRegNum).should('be.visible').type('CN-1234');
    cy.get(data.website).should('be.visible').type('www.funstart,com');
    cy.get(data.instagramHandle).should('be.visible').type('@funstart');
    cy.get(data.twiiterHandle).should('be.visible').type('@funstart');
    cy.get(data.businessname).should('be.visible');

    
  })

 
})