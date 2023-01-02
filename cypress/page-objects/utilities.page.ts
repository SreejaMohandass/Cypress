export class Utility{
    visit(){
        return cy.visit('https://app.timetac.com/');
    }

    wait(){
        return cy.wait(5000);
    }

  }