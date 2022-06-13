const puppeteer = require("puppeteer");
const fs = require("fs");


function extractFox() {
  const extractedItems = document.querySelectorAll("article");
  const items = [];
  for (let element of extractedItems) {
    console.log(element.innerText);
    const memo = {
      title: element.querySelector(".title")
        ? element.querySelector(".title").innerText
        : "NONE",
      type: element.querySelector(".eyebrow")
        ? element.querySelector(".eyebrow").innerText
        : "NONE",
      url: element.querySelector(".title a")
        ? element.querySelector(".title a").href
        : "NONE",
    };
    items.push(memo);
  }
  return items;
}

async function scrapeInfiniteScrollItems(
  page,
  getFoxNews,
  itemTargetCount,
  scrollDelay = 1000
) {
  let items = [];
  try {
    let previousHeight;
    while (items.length < itemTargetCount) {
      items = await page.evaluate(getFoxNews);
      previousHeight = await page.evaluate("document.body.scrollHeight");
      await page.evaluate("window.scrollTo(0, document.body.scrollHeight)");
      await page.waitForFunction(
        `document.body.scrollHeight > ${previousHeight}`
      );
      await page.waitFor(scrollDelay);
    }
  } catch (e) {
    console.log(e);
  }
  return items;
}

export default async function handler(req, res) {
  const browser = await puppeteer.launch({
    headless: false,
  });
  const page = await browser.newPage();
  page.setJavaScriptEnabled(false)
  page.setViewport({ width: 1280, height: 926 });

  await page.goto("https://www.foxnews.com");

  // Scroll and extract items from the page.
  let items = await scrapeInfiniteScrollItems(
    page,
    extractFox,
    10
    );


  // Save extracted items to a file.
  fs.writeFileSync("./data.json", JSON.stringify(items, null, 2) + "\n");

  // Close the browser.
  await browser.close();

  res.status(200).json({ hello: "i love rm" });
}
