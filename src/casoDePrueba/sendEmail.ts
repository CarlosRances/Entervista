import { WebDriver } from "selenium-webdriver";

const google = 'input[name="q"]';
const gmailText = '//div[@id="wp-tabs-container"]/*//span[contains(text(), "Gmail")]';
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

async function sendEmail (driver: WebDriver) {

    
}