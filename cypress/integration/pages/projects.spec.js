/// <reference types="cypress" />

describe('/projects', () => {
  describe('after page loads', () => {
    it('click on link ver projetos to navigate to projects section', () => {
      cy.visit('/');

      cy.get('a[href*="#ProjectsWrapper"]').click();

      cy.location('href').should('include', '/#ProjectsWrapper');

      cy.get('img[alt*="alurakut"]').click();

      cy.url().should('eq', 'http://localhost:3000/projects/alurakut');
    });

    it('then click on the alurakut project to navigate to project page info', () => {
      cy.get('img[alt*="alurakut"]').click();

      cy.url().should('eq', 'http://localhost:3000/projects/alurakut');
    });
  });
});
