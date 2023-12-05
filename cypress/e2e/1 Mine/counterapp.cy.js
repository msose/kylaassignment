/// <reference types="cypress" />

describe('Counter App', () => {
    beforeEach(() => {
      cy.visit('Counter App');
    });
  
    it('should increment the counter', () => {
      cy.get('#counter').should('have.text', '0');
      cy.contains('Increment').click();
      cy.get('#counter').should('have.text', '1');
    });
  
    it('should decrement the counter', () => {
      cy.get('#counter').should('have.text', '0');
      cy.contains('Decrement').click();
      cy.get('#counter').should('have.text', '-1');
    });
  
    

    })
    
              
