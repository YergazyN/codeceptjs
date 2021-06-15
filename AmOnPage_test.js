Feature('GoogleSearch');

Scenario('I.amOnPage-Test', ({ I }) => {
    I.amOnPage('/');
    I.wait(1);

    I.amOnPage('/doodles');
    I.wait(1);

    I.amOnPage('https://codecept.io');
    I.wait(1);

    I.amOnPage('https://codecept.io/playwright/#setup');
    I.wait(1);

    });

    //github authorization

    Scenario('2.TestCase2-Test', ({I}) => {
        
        I.amOnPage('https://github.com/');
        I.wait(1);

        I.amOnPage('https://github.com/login');
        I.wait(1);

        I.see("Sign in to GitHub");

        I.fillField("#login_field", "YergazyN");
        I.fillField("#password", "Aikosha2017");
        I.click(".btn");
        I.see("Repositories ");
        I.dontSee("Sign in to GitHub");

        
    });