const puppeteer = require("puppeteer");
const fs = require("fs");

function extractFox() {
  const extractedItems = document.querySelectorAll("article");
  const items = [];
  for (let element of extractedItems) {
    const memo = {
      title: element.querySelector(".title")!=null
        ? element.querySelector(".title").innerText
        : "NONE",
      type: element.querySelector(".eyebrow")!=null
        ? element.querySelector(".eyebrow").innerText
        : "NONE",
      url: element.querySelector(".title a") != null
        ? element.querySelector(".title a").href
        : "NONE",
    };
    if (items.length < 30 && memo.url !== "NONE") {
      items.push(memo);
    }
  }
  return items;
}

function extractWSJ() {
  const extractedItems = document.querySelectorAll("article");
  const items = [];
  for (let element of extractedItems) {
    const memo = {
      title: element.querySelector("h3")!=null
        ? element.querySelector("h3").innerText
        : element.querySelector("h4")!=null
        ? element.querySelector("h4").innerText
        : "NONE",
      type: element.querySelector("p")!=null
        ? element.querySelector("p").innerText
        : "NONE",
      url: element.querySelector("a")!=null
        ? element.querySelector("a").href
        : "NONE",
    };
    if (items.length < 30 && memo.url !== "NONE") {
      items.push(memo);
    }
  }
  return items;
}

async function scrapeInfiniteScrollItems(
  page,
  getNews,
  itemTargetCount,
  scrollDelay = 1000
) {
  let items = [];
  try {
    let previousHeight;
    while (items.length < itemTargetCount) {
      items = await page.evaluate(getNews);
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
  page.setJavaScriptEnabled(false);
  page.setViewport({ width: 1280, height: 926 });

  //await page.goto("https://www.foxnews.com");

  //let items = await scrapeInfiniteScrollItems(page, extractFox, 10);
  //fs.writeFileSync("./fox.json", JSON.stringify(items, null, 2) + "\n");

  await page.goto("https://www.wsj.com");

  let items = await scrapeInfiniteScrollItems(page, extractWSJ, 10);
  fs.writeFileSync("./wsj.json", JSON.stringify(items, null, 2) + "\n");
  
  await browser.close();

  res.status(200).json({ hello: "i love rm" });
}
