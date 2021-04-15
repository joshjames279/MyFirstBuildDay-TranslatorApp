describe("Checking functionality of Translator App", function(){
    beforeEach(function(){
       cy.visit("/")
    })

   it("Shows a header of Translator", function(){
       cy.contains('Translator')
    })
   
    it("Shows a textbox", function(){
      cy.get('#Text')
   })

   it("Shows a translate button", function() {
       
      cy.get("#Translate-button")
   })

   it("Shows a translation", function() {
      cy.intercept('https://systran-systran-platform-for-language-processing-v1.p.rapidapi.com/translation/text/translate?source=en&target=fr&input=*', { fixture: 'translate.json' })
      
     cy.get('#Text').type('yes')
     cy.get('#Translate-button').click()
     cy.contains('oui')
   })
})