import { sendEmail } from "./casoDePrueba/sendEmail";
import { openApp } from "./util/util";

async function init() {

    let driver = await openApp();

    await sendEmail(driver);
};

init();