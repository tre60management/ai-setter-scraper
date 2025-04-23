const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.goto('https://www.google.com/maps/search/centri+estetici+Taranto');
  console.log("✅ Pagina caricata.");
  await browser.close();
})();
