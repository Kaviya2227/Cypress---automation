///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>
describe('Log into the website', () => {
    it('This is my first test case', () => {
        cy.fixture('example').then((data)=>{
            cy.visit('https://demo.guru99.com/test/newtours/index.php')
            data.forEach((user)=>{
                cy.get('a[href="register.php"]').contains("REGISTER").click()
                cy.get('#email').type(user.name)
                cy.get("input[name=password]").type(user.password)
                cy.get("input[name=confirmPassword]").type(user.confirmPassword)
                cy.get("input[name=submit]").click()
            })
            
        })
    })
})
