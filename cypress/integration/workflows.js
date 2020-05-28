const config = require('../fixtures/config.json');
    
    describe('Work flows for sign up and sign in', () => {

        beforeEach(() => { 
            //cy.fixture("config").as("config");
            cy.visit('')
            // Visit https://www.etsy.com/
          });
    
        it('Create an account', function () {
            cy.Register()
            
        })

        it('Test Required fields on Sign In ', function () {
            cy.SignIn()
            
        })

        it('Login with user1 ', function () {
            cy.SignIn('user1')

            //cy.SignIn('user2')
            //cy.SignIn('user3')
            
        })

        it('Login with user2 ', function () {
            cy.SignIn('user2')
            
        })

        it('Login with user3 ', function () {
            cy.SignIn('user3')
            
        })

    });
