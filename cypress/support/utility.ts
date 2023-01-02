
class Utility {
    //Execute Your Tests on different environment using Environment Varialble in Cypress
    //Refer: https://dzone.com/articles/configure-cypress-tests-to-run-on-multiple-environments
    getBaseUrl() {
        let url = "https://app.timetac.com/";
        return url;
    }
}

export default new Utility