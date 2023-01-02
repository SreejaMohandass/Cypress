export class Logout{
    settingsBtn(){
        return cy.get('span', {timeout:30000}).contains('Settings');
    }

    logoutBtn(){
        return cy.get('button[data-testid="settings.logout"]', {timeout:30000}).first();
    }

  }