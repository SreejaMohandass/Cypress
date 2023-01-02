export class Dashboard{
    playBtn(){
        return cy.get('button[data-testid="ltt-start-button"]', {timeout:30000}).first();
    }

    pauseBtn(){
        return cy.get('button[data-testid="ltt-stop-button"]', {timeout:30000}).first();
    }
    
  }