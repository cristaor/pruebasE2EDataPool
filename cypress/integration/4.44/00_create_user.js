describe('Create login', () => {
    
 it('0. Escenario de crear usuario para pruebas', () => {  
     cy.visit("http://localhost:3003/ghost/#/setup");
     cy.wait(2000)
     cy.get("input[name='blog-title']").type("Pruebas Automatizadas MISO");
     cy.get("input[name='name']").type(Cypress.env('username'));
     cy.get("input[name='email']").type(Cypress.env('user'));
     cy.get("input[name='password']").type(Cypress.env('password'));
     cy.get("button[type='submit']").click({force:true});
     cy.wait(2000)
     cy.visit("http://localhost:3003/ghost/#/signout");
     });
});
    
