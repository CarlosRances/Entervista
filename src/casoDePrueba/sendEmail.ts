import { Key, WebDriver } from "selenium-webdriver";
import { closeApp, delay, findByCss, findByXpath, waitForElementByCss } from "../util/util";

const google = 'input[name="q"]';
const clickOnYahooMail = '//div/div[@class="g"][1]/div/div/div/div/a/h3';
const logoYahoo = '//div[@id="login-body"]/div/span/a/img';
const logoYahooMail = '//body[@id="signin-main"]/div/img';
const signInBtn1 = '//body[@id="signin-main"]/div/a[2]/span';
const inputEmail = 'input#login-username';
const nextBtn = 'input#login-signin';
const inputPassword = 'input#login-passwd';
const nextBtn2 = '//div[@id="login-body"]/div[2]/div[@class="login-box right"]/div[2]/div[2]/form/div[@class="button-container"]/button';
const searchField = 'div#mail-search';
const composeBtn = '//div/div/nav/div/div/a';
const inputContactName = 'input#message-to-field';
const inputSubject = 'input[placeholder="Subject"]';
const inputMailText = 'div[data-test-id="rte"]';
const sendBtn = '//div[@id="mail-app-component"]/div/div/div[2]/div[2]/div/button';
const successNotification = '//div[@class="D_F ab_CH ac_CH gl_C q_52qC j_1zwO34 o_h cZW7ROP_A e_dRA"]';

export async function sendEmail (driver: WebDriver) {

   await driver.get('https://www.google.com/');

   await delay();

   await findByCss(driver, google).sendKeys('Yahoo mail', Key.ENTER);

   await delay();

   await findByXpath(driver, clickOnYahooMail).click();
   
   const isNotifiyedLogoYahooMail = await waitForElementByCss(driver, logoYahooMail).catch(e => false);

    if (isNotifiyedLogoYahooMail === false) {

        console.log('\x1b[31m', 'Logo is not displayed', '\x1b[0m');

    } else {

        console.log('\x1b[32m', 'Logo is displayed', '\x1b[0m');
    }

    await delay();

    await findByXpath(driver, signInBtn1).click();
    
    const isNotifiyedLogo = await waitForElementByCss(driver, logoYahoo).catch(e => false);

    if (isNotifiyedLogo === false) {

        console.log('\x1b[31m', 'Logo is not displayed', '\x1b[0m');

    } else {

        console.log('\x1b[32m', 'Logo is displayed', '\x1b[0m');
    }

    await delay(2000);

    await findByCss(driver, inputEmail).sendKeys("entrevista131120@yahoo.com");

    await delay(3000);

    await findByCss(driver, nextBtn).click();

    await delay(3000);

    await findByCss(driver, inputPassword).sendKeys("Asd123456789");

    await delay(3000);

    await findByXpath(driver, nextBtn2).sendKeys(Key.ENTER);

    await delay();

    const isNotifiyedSearchField = await waitForElementByCss(driver, searchField).catch(e => false);

    if (isNotifiyedSearchField === false) {

        console.log('\x1b[31m', 'Search field is not displayed', '\x1b[0m');

    } else {

        console.log('\x1b[32m', 'Search field is displayed', '\x1b[0m');
    }

    await delay();

    await findByXpath(driver, composeBtn).click();

    await delay(3000);

    await findByCss(driver, inputContactName).sendKeys("ranc3s7@gmail.com");

    await delay();

    await findByCss(driver, inputSubject).sendKeys("Test");

    await delay(2000);

    await findByCss(driver, inputMailText).sendKeys("To test");

    await delay(2000);

    await findByXpath(driver, sendBtn).click();
    
    const isNotifiyedSuccessNotification = await waitForElementByCss(driver, successNotification).catch(e => false);

    if (isNotifiyedSuccessNotification === false) {

        console.log('\x1b[31m', 'Notification is not displayed', '\x1b[0m');

    } else {

        console.log('\x1b[32m', 'Notification is displayed', '\x1b[0m');
    }

    await delay();

    console.log("Test Case Finished");

    await closeApp(driver);

}
