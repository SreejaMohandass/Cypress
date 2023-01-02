export class Login{
    accountName(){
        return cy.get('input[data-testid="login.account-name"]', {timeout:30000}).first();
    }
    continueBtn(){
        return cy.get('button[data-testid="login.continue"]').first();
    }
    userName(){
        return cy.get('input[data-testid="login.username"]').first();
    }
    password(){
        return cy.get('input[data-testid="login.password"]').first();
    }
    signinBtn(){
        return cy.get('button[data-testid="login.sign-in"]').first();
    }
    
  }