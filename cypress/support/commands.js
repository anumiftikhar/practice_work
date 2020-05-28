//const config = require('../fixtures/config.json');

Cypress.Commands.add("AccessSignIn", () => {
    cy.get('.select-signin').click()
   
    });

Cypress.Commands.add("SignIn", (user) => {
    cy.fixture('config').then((config) => {
            if (user == 'user1') {
                var username1 = config.user1
                var password = config.password
                cy.get('.select-signin').click()
                cy.contains('Register')
                cy.get('#join_neu_email_field').click().type(username1)      
                cy.get('#join_neu_password_field').click().type(password)
                cy.get('.btn-primary').click({ multiple: true })
                cy.contains('Email address is invalid.')

            } else if (user == 'user2') {
                var username2 = config.user2
                var password = config.password
                cy.get('.select-signin').click()
                cy.contains('Register')
                cy.get('#join_neu_email_field').click().type(username2)      
                cy.get('#join_neu_password_field').click().type(password)
                cy.get('.btn-primary').click()
                cy.contains('Email address is invalid.')
                
            }   else if (user == 'user3') {
                var username3 = config.user3
                var password = config.password
                cy.get('.select-signin').click()
                cy.contains('Register')
                cy.get('#join_neu_email_field').click().type(username3)      
                cy.get('#join_neu_password_field').click().type(password)
                cy.get('.btn-primary').click()
                cy.contains('Email address is invalid.')
            }    
        }) 
    });
 
Cypress.Commands.add("Register", () => {
    cy.AccessSignIn()    
    cy.get('.select-register').click()
        cy.contains('Create your account')
        });    
