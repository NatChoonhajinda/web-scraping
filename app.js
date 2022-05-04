const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('https://www.google.com/search?q=weather&oq=weather&aqs=edge.0.69i59l3j0i402l2j0i131i433i512j69i60l3.2564j1j1&sourceid=chrome&ie=UTF-8');
  //#wob_tm
  let element = await page.waitForSelector('#wob_tm')//selector
  let text= await page.evaluate(element=>element.textContent,element)
  console.log(text)
  await browser.close();
})();
