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

    Scenario('3.GrabText-Test', async({I}) => {        
        I.amOnPage('https://the-internet.herokuapp.com/checkboxes');
        let a = await I.grabTextFrom("#checkboxes");
        console.log(a);    
    });

    Scenario('4.SelectOptions-Test', ({I}) => {        
        I.amOnPage('https://the-internet.herokuapp.com/dropdown');
        I.selectOption("#dropdown", "Option 2");
        I.wait(1);
    });

    Scenario('5.Wait-Test', ({I}) => {        
        I.amOnPage('https://the-internet.herokuapp.com/dynamic_loading/1');
        I.click("#start > button:nth-child(1)");
        I.waitForText("Hello World!", 20);
    });