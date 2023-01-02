import { Login } from '../../page-objects/login.page';
import { Dashboard } from '../../page-objects/dashboard.page';
import { Logout } from '../../page-objects/logout.page';
import { Utility } from '../../page-objects/utilities.page';

const login = new Login();
const dashboard = new Dashboard();
const logout = new Logout();
const utility = new Utility();


describe('Start Time Tracking', () => { 
    beforeEach(() => {
        utility.visit();
        utility.wait();
        login.accountName().should('be.visible');
        login.accountName().focus();
        cy.fixture("testdata").then(data => {
            login.accountName().type(data.accountName, {force:true});
            login.continueBtn().click({force:true});
            login.userName().type(data.userName, {force:true});
            login.password().type(data.password, {force:true});
          });
        login.signinBtn().click({force:true}); 
      
      })
      
    it('Start Time tracking', () => {
        dashboard.playBtn().click({force:true});
        utility.wait();
        dashboard.pauseBtn().click({force:true});
        utility.wait();
    });

    after( () => {
        logout.settingsBtn().click({force:true});
        logout.logoutBtn().click({force:true});
    });
});
