///<reference types="Cypress"/>
///<reference types="@cypress/xpath"/>
describe('Log into the website', () => {
    beforeEach(() => {
        cy.visit('https://demo.guru99.com/test/newtours/index.php')
    });
    it('This is my first test case', () => {
        //cy.visit('https://demo.guru99.com/test/newtours/index.php')
        cy.get('a[href="register.php"]').contains("REGISTER").click()
        cy.get('#email').type('Kaviya Kamalesh')
        cy.get("input[name=password]").type('kaviya@123')
        cy.get("input[name=confirmPassword]").type('kaviya@123')
        cy.get("input[name=submit]").click()
        cy.get('a[href="login.php"]').contains("sign-in").click()
        cy.get("input[name=userName]").type('Kaviya')
        cy.get("input[name=password]").type('kaviya@123')
        cy.get("input[name=submit]").click()
        cy.get('a[href="reservation.php"]').contains("Flights").click()
        cy.get("input[type=radio]").eq(1).check()
        cy.get("select[name=passCount]").select('2').should('have.value','2')
        cy.get("select[name=fromPort]").select('Paris')
        cy.get("select[name=fromMonth]").select('September')
        cy.get("select[name=fromDay]").select('27').should('have.value','27')
        cy.get("select[name=fromPort]").select('Sydney')
        cy.get("select[name=toMonth]").select('October')
        cy.get("select[name=toMonth]").select('1').should('have.value','1')
        cy.get('[value="First"]').check()
        cy.get("select[name=airline]").select('Unified Airlines')
        cy.get("input[name=findFlights]").type('image')
        cy.get('a[href="index.php"]').contains("Home").click()
        cy.get('a[href="support.php"]').contains("Hotel").click()
        cy.get('a[href="index.php"]').contains("Home").click()
        cy.get('a[href="support.php"]').contains("Car Rentals").click()
        cy.get('a[href="index.php"]').contains("Home").click()
        cy.get('a[href="index.php"]').contains("Cruises").click()
        cy.get("input[name=userName]").type('Kaviya')
        cy.get("input[name=password]").type('kaviya@123')
        cy.get("input[name=submit]").click()
        cy.get('a[href="support.php"]').contains("Destinations").click()
        cy.get('a[href="index.php"]').contains("Home").click()
        cy.get('a[href="support.php"]').contains("Vacations").click()
        cy.get(':nth-child(4) > td > a > img').click()













       

    });
});