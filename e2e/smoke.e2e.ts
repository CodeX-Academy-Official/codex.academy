const puppeteer = require("puppeteer");
const assert = require("assert");

(async () => {
  try {
    const url = process.env.TEST_URL;
    if (!url) throw Error("No TEST_URL defined.");
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);
    const selector = ".big-message";
    await page.waitForSelector(selector);
    let element = await page.$(selector);
    if (!element) throw new Error("Element not found on page.");
    let value = await element.evaluate((el: any) => el.textContent);
    if (!value) throw new Error("Element had no value.");
    await browser.close();
    const found = value.indexOf("Learn to code") > -1;
    if (!found) {
      console.error("Smoke test failed.");
      (<any>process).exit(1);
    }
  } catch (err) {
    console.log(err);
    throw err;
  }
})();
