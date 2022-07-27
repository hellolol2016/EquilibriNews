const puppeteer = require("puppeteer");
const fs = require("fs");

function truncate(str, n){
  return (str.length > n) ? str.substr(0, n-1) + '&hellip;' : str;
};

function extractFox() {
  const extractedItems = document.querySelectorAll("article");
  const items = [];
  for (let element of extractedItems) {
    const memo = {
      title:
        element.querySelector(".title") != null
          ? element.querySelector(".title").innerText
          : "NONE",
      type:
        element.querySelector(".eyebrow") != null
          ? element.querySelector(".eyebrow").innerText
          : "NONE",
      url:
        element.querySelector(".title a") != null
          ? element.querySelector(".title a").href
          : "NONE",
          source:"fox"
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
      title:
        element.querySelector("h3") != null
          ? element.querySelector("h3").innerText
          : element.querySelector("h4") != null
          ? element.querySelector("h4").innerText
          : "NONE",
      type:
        element.querySelector("p") != null
          ? element.querySelector("p").innerText
          : "NONE",
      url:
        element.querySelector("a") != null
          ? element.querySelector("a").href
          : "NONE",
          source:"wsj"
    };
    if(memo.type.length>70){
      memo.type = memo.type.substring(0, 70) + "...";
    }
    if (items.length < 30 && memo.url !== "NONE") {
      items.push(memo);
    }
  }
  return items;
}

function extractNYT() {
  const extractedItems = document.querySelectorAll("#stream-panel li");
  const items = [];
  for (let element of extractedItems) {
    const memo = {
      title:
        element.querySelector("h2") != null
          ? element.querySelector("h2").innerText
          : "NONE",
      type:
        element.querySelector("p") != null
          ? element.querySelector("p").innerText
          : "NONE",
      url:
        element.querySelector("a") != null
          ? element.querySelector("a").href
          : "NONE",
          source:"nyt"
    };

    if(memo.type.length>70){
      memo.type = memo.type.substring(0, 70) + "...";
    }
    if (items.length < 30 && memo.url !== "NONE" && memo.title !== "NONE") {
      items.push(memo);
    }
  }
  return items;
}

function extractABC() {
  const extractedItems = document.querySelectorAll(".ContentRoll__Item");
  const items = [];
  for (let element of extractedItems) {
    const memo = {
      title:
        element.querySelector(".AnchorLink") != null
          ? element.querySelector(".AnchorLink").innerText
          : "NONE",
      type:
        element.querySelector(".ContentRoll__Desc") != null
          ? element.querySelector(".ContentRoll__Desc").innerText
          : "NONE",
      url:
        element.querySelector("a") != null
          ? element.querySelector("a").href
          : "NONE",
          source:"abc"
    };

    if(memo.type.length>70){
      memo.type = memo.type.substring(0, 70) + "...";
    }
    if (items.length < 30 && memo.url !== "NONE" && memo.title !== "NONE") {
      items.push(memo);
    }
  }
  return items;
}

function extractDM() {
  const column = document.querySelectorAll(".article");
  const items = [];
  for (let element of column) {
    const memo = {
      title:
        element.querySelector("h2") != null
          ? element.querySelector("h2").innerText
          : "NONE",
      type:
        element.querySelectorAll("p:not(.show-as-new ):not(.show-as-updated)") != null
          ? element.querySelector("p:not(.show-as-new):not(.show-as-updated)").innerText
          : "NONE",
      url:
        element.querySelector("a") != null
          ? element.querySelector("a").href
          : "NONE",
          source:"dm"
    };

    if(memo.type.length>70){
      memo.type = memo.type.substring(0, 70) + "...";
    }

    if (items.length < 30 && memo.url !== "NONE" && memo.title !== "NONE") {
      items.push(memo);
    }
  }
  return items;
}
  
function extractR() {
  const column = document.querySelectorAll("article");
  const items = [];
  for (let element of column) {
    const memo = {
      title:
        element.querySelector("h4") != null
          ? element.querySelector("h4").innerText
          : "NONE",
      type:
        element.querySelectorAll("p") != null
          ? element.querySelector("p").innerText
          : "NONE",
      url:
        element.querySelector("a") != null
          ? element.querySelector("a").href
          : "NONE",
          source:"r"
    };

    if (items.length < 30 && memo.url !== "NONE" && memo.title !== "NONE") {
      items.push(memo);
    }
  }
  return items;
}

function extractVOX() {
  const column = document.querySelectorAll(".c-compact-river__entry");
  const items = [];
  for (let element of column) {
    const memo = {
      title:
        element.querySelector("h2") != null
          ? element.querySelector("h2").innerText
          : "NONE",
      type:
        element.querySelectorAll("time") != null
          ? element.querySelector("time").innerText
          : "NONE",
      url:
        element.querySelector("a") != null
          ? element.querySelector("a").href
          : "NONE",
          source:"vox"
    };

    if (items.length < 30 && memo.url !== "NONE" && memo.title !== "NONE") {
      items.push(memo);
    }
  }
  return items;
}

async function scrapeInfiniteScrollItems(
  page,
  getNews,
  src
) {
  let items = [];
  try {
      items = await page.evaluate(getNews);
  } catch (e) {
    console.log(e);
    console.log("bad source" , src );
  }
  return items;
}

export default async function handler(req, res) {
  const browser = await puppeteer.launch({
    args:["--no-sandbox","--disable-setuid-sandbox"],
    
  });
  const page = await browser.newPage();
  page.setJavaScriptEnabled(false);
  page.setViewport({ width: 1280, height: 926 });

  await page.goto("https://www.foxnews.com/politics");
  let items = await scrapeInfiniteScrollItems(page, extractFox,"fox");
  fs.writeFileSync("./public/articles/fox.json", JSON.stringify({articles:items}, null, 2) + "\n");

  await page.goto("https://www.wsj.com/news/politics?mod=nav_top_section");
  items = await scrapeInfiniteScrollItems(page, extractWSJ,"wsj");
  fs.writeFileSync("./public/articles/wsj.json", JSON.stringify({articles:items}, null, 2) + "\n");

  await page.goto("https://www.nytimes.com/section/politics");
  items = await scrapeInfiniteScrollItems(page, extractNYT,"nyt");
  fs.writeFileSync("./public/articles/nyt.json", JSON.stringify({articles:items}, null, 2) + "\n");

  await page.goto("https://abcnews.go.com/Politics");
  items = await scrapeInfiniteScrollItems(page, extractABC,"abc");
  fs.writeFileSync("./public/articles/abc.json", JSON.stringify({articles:items}, null, 2) + "\n");

  await page.goto("https://www.dailymail.co.uk/news/us-politics/index.html");
  items = await scrapeInfiniteScrollItems(page, extractDM,"dm");
  fs.writeFileSync("./public/articles/dm.json", JSON.stringify({articles:items}, null, 2) + "\n");

  await page.goto("https://reason.com/latest/")
  items = await scrapeInfiniteScrollItems(page, extractR,"r");
  fs.writeFileSync("./public/articles/r.json", JSON.stringify({articles:items}, null, 2) + "\n");

  await page.goto("https://www.vox.com/policy-and-politics")
  items = await scrapeInfiniteScrollItems(page, extractVOX,"vox");
  fs.writeFileSync("./public/articles/vox.json", JSON.stringify({articles:items}, null, 2) + "\n");

  await browser.close();

  res.status(200).json({success:"true"});
}
