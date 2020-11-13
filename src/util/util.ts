import { Builder, By, until, WebDriver } from "selenium-webdriver";

export function delay(timeout = 5000) {
    return new Promise((resolve) => setTimeout(() => resolve(), timeout));
}

export function findByCss(driver:WebDriver, css:string) {
   return driver.findElement(By.css(css));
}

export function findByXpath(driver:WebDriver, xpath:string) {
    return driver.findElement(By.xpath(xpath));
}

export async function openApp() {
    const driver = await new Builder().forBrowser('chrome').build();
    await driver.manage().window().maximize();
    return driver;
}

export function closeApp(driver:WebDriver) {
    return driver.quit();
}


export async function waitForElementByXpath(driver: WebDriver, xpath: string, timeout = 20000) {
    return driver.wait( until.elementLocated(By.xpath(xpath)), timeout );
}

export async function waitForElementByCss(driver: WebDriver, css: string, timeout = 20000) {
    return driver.wait( until.elementLocated(By.css(css)), timeout);
}

