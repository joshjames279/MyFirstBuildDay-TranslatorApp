describe("Checking functionality of Translator App", function(){
    beforeEach(function(){
       cy.visit("/")
    })

   it("Shows a header of Translator", function(){
       cy.contains('Translator')
    })

})