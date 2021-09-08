/// <reference types="cypress" />

describe('/pages/modal', () => {
  it('preencha os campos do formulário entre em contato', () => {
    cy.visit('/#Contact');

    // clicar no botão de entre em contato
    cy.get('[aria-label="Entre em contato"]').click();

    // preencher campo do nome
    cy.get('input[name="name"]').type('Mayra');

    // preencher campo do email
    cy.get('input[name="email"]').type('user@user.com');

    // preencher campo da mensagem
    cy.get('textarea[name="message"]').type('nova mensagem');

    // clicar no botão de enviar
    cy.get('[data-modal-safe-area] button[type="submit"]').click();
  });
});
