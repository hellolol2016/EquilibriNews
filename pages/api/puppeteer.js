import chromium from "chrome-aws-lambda";
const allArticles = {};

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
      source: "fox",
    };
    if (items.length < 5) {
      memo.img = element.querySelector("img").src;
    }
    if (items.length < 30 && memo.url !== "NONE") {
      items.push(memo);
    }
    if (items.length > 15) {
      return items;
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
          : element.querySelector("h2") != null
          ? element.querySelector("h2").innerText
          : "NONE",
      type:
        element.querySelector("p") != null
          ? element.querySelector("p span").innerText
          : "NONE",
      url:
        element.querySelector("a") != null
          ? element.querySelector("a").href
          : "NONE",
      source: "wsj",
    };
    if (items.length < 4) {
      memo.img =
        element.querySelector("img") != null
          ? element.querySelector("img").src
          : "NONE";
    }
    if (memo.type.length > 70) {
      memo.type = memo.type.substring(0, 70) + "...";
    }
    if (items.length < 30 && memo.url !== "NONE") {
      items.push(memo);
    }
    if (items.length > 15) {
      return items;
    }
  }
  return items;
}
function extractNYT() {
  const extractedItems = document.querySelectorAll("li");
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
      source: "nyt",
    };

    if (items.length < 4) {
      memo.img =
        element.querySelector("img") != null
          ? element.querySelector("img").src
          : "NONE";
    }
    if (memo.type.length > 70) {
      memo.type = memo.type.substring(0, 70) + "...";
    }
    if (items.length < 30 && memo.url !== "NONE" && memo.title !== "NONE") {
      items.push(memo);
    }
    if (items.length > 15) {
      return items;
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
      source: "abc",
    };

    if (memo.type.length > 70) {
      memo.type = memo.type.substring(0, 70) + "...";
    }
    if (items.length < 30 && memo.url !== "NONE" && memo.title !== "NONE") {
      items.push(memo);
    }
    if (items.length > 15) {
      return items;
    }
    if (items.length < 5) {
      memo.img = element.querySelector("source").srcset;
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
        element.querySelectorAll(
          "p:not(.show-as-new ):not(.show-as-updated)"
        ) != null
          ? element.querySelector("p:not(.show-as-new):not(.show-as-updated)")
              .innerText
          : "NONE",
      url:
        element.querySelector("a") != null
          ? element.querySelector("a").href
          : "NONE",
      source: "dm",
    };

    if (memo.type.length > 70) {
      memo.type = memo.type.substring(0, 70) + "...";
    }

    if (items.length < 30 && memo.url !== "NONE" && memo.title !== "NONE") {
      items.push(memo);
    }
    if (items.length > 15) {
      return items;
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
      source: "r",
    };

    if (items.length < 30 && memo.url !== "NONE" && memo.title !== "NONE") {
      items.push(memo);
    }
    if (items.length > 15) {
      return items;
    }
    if (items.length < 5) {
      memo.img = element.querySelector("noscript img").src;
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
      source: "vox",
    };
    if (items.length < 5) {
      memo.img = element.querySelector("img").src;
    }
    if (items.length < 30 && memo.url !== "NONE" && memo.title !== "NONE") {
      items.push(memo);
    }
    if (items.length > 15) {
      return items;
    }
  }
  return items;
}
function extractNM() {
  const column = document.querySelectorAll(".article_link");
  const items = [];
  for (let element of column) {
    const memo = {
      title:
        element.querySelector("a").innerText != null
          ? element.querySelector("a").innerText
          : "NONE",
      type:
        element.querySelectorAll("#copy_small") != null
          ? element.querySelector("#copy_small").innerText
          : "NONE",
      url:
        element.querySelector("a") != null
          ? element.querySelector("a").href
          : "NONE",
      source: "nm",
    };
    if (items.length < 5) {
      memo.img = element.querySelector("img").src;
    }
    if (memo.type.length > 70) {
      memo.type = memo.type.substring(0, 70) + "...";
    }
    if (items.length < 30 && memo.url !== "NONE") {
      items.push(memo);
    }
    if (items.length > 15) {
      return items;
    }
  }
  return items;
}
//function extractImg(){
//return document.querySelector("img").src;
//}

async function scrapeInfiniteScrollItems(page, getNews, src) {
  let items = [];
  try {
    items = await page.evaluate(getNews);
  } catch (e) {
    console.log(e);
    console.log("bad source", src);
  }
  return items;
}

//async function scrapeImage (page,algo,src){
//let imgsrc = "BOOHOO";
//try{
//imgsrc = await page.evaluate(algo);
//}catch(e){
//console.log(e);
//console.log("boohoo source" , src);
//}
//return imgsrc;
//}

//async function getImage(url){
//const browser = await chromium.puppeteer.launch({
//args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
//defaultViewport: chromium.defaultViewport,
//executablePath: await chromium.executablePath,
//headless: true,
//ignoreHTTPSErrors: true,
//});
//const page = await browser.newPage();
//page.setJavaScriptEnabled(false);
//page.setViewport({ width: 1280, height: 3000 });

//await page.goto(url);
//let img = await scrapeImage(page, extractImg,"img source idk lool");
//return img;
//}

export default async function handler(req, res) {

    console.time();
  let rating = req.query.rating;
  console.log(rating);
  const browser = await chromium.puppeteer.launch({
    args: [...chromium.args, "--hide-scrollbars", "--disable-web-security"],
    defaultViewport: chromium.defaultViewport,
    executablePath: await chromium.executablePath,
    headless: true,
    ignoreHTTPSErrors: true,
  });
  const page = await browser.newPage();
  page.setJavaScriptEnabled(false);
  page.setViewport({ width: 1280, height: 3000 });
  let items;

  if (rating >= 0) {
    if (rating < 2) {
      //r fox nm wsj
      await page.goto("https://reason.com/latest/");
      items = await scrapeInfiniteScrollItems(page, extractR, "r");
      allArticles.r = items;

      await page.goto("https://www.foxnews.com/politics");
      items = await scrapeInfiniteScrollItems(page, extractFox, "fox");
      allArticles.fox = items;

      await page.goto("https://www.newsmax.com/politics/");
      items = await scrapeInfiniteScrollItems(page, extractNM, "nm");
      allArticles.nm = items;

      await page.goto("https://www.wsj.com/news/us");
      items = await scrapeInfiniteScrollItems(page, extractWSJ, "wsj");
      allArticles.wsj = items;
    } else if (rating < 4) {
      //r fox nm wsj
      await page.goto("https://reason.com/latest/");
      items = await scrapeInfiniteScrollItems(page, extractR, "r");
      allArticles.r = items;

      await page.goto("https://www.foxnews.com/politics");
      items = await scrapeInfiniteScrollItems(page, extractFox, "fox");
      allArticles.fox = items;

      await page.goto("https://www.newsmax.com/politics/");
      items = await scrapeInfiniteScrollItems(page, extractNM, "nm");
      allArticles.nm = items;

      await page.goto("https://www.wsj.com/news/us");
      items = await scrapeInfiniteScrollItems(page, extractWSJ, "wsj");
      allArticles.wsj = items;
    } else if (rating < 7) {
      //r nyt wsj
      await page.goto("https://reason.com/latest/");
      items = await scrapeInfiniteScrollItems(page, extractR, "r");
      allArticles.r = items;

      await page.goto("https://www.wsj.com/news/us");
      items = await scrapeInfiniteScrollItems(page, extractWSJ, "wsj");
      allArticles.wsj = items;

      await page.goto("https://www.nytimes.com/section/politics");
      items = await scrapeInfiniteScrollItems(page, extractNYT, "nyt");
      allArticles.nyt = items;
    } else if (rating < 9) {
      //abc nyt wsj r

      await page.goto("https://abcnews.go.com/Politics");
      items = await scrapeInfiniteScrollItems(page, extractABC, "abc");
      allArticles.abc = items;
      await page.goto("https://www.nytimes.com/section/politics");
      items = await scrapeInfiniteScrollItems(page, extractNYT, "nyt");
      allArticles.nyt = items;
      await page.goto("https://www.wsj.com/news/us");
      items = await scrapeInfiniteScrollItems(page, extractWSJ, "wsj");
      allArticles.wsj = items;
      await page.goto("https://reason.com/latest/");
      items = await scrapeInfiniteScrollItems(page, extractR, "r");
      allArticles.r = items;
    } else if (rating < 11) {
      //abc nyt wsj vox
      await page.goto("https://abcnews.go.com/Politics");
      items = await scrapeInfiniteScrollItems(page, extractABC, "abc");
      allArticles.abc = items;
      await page.goto("https://www.nytimes.com/section/politics");
      items = await scrapeInfiniteScrollItems(page, extractNYT, "nyt");
      allArticles.nyt = items;
      await page.goto("https://www.wsj.com/news/us");
      items = await scrapeInfiniteScrollItems(page, extractWSJ, "wsj");
      allArticles.wsj = items;
      await page.goto("https://www.vox.com/policy-and-politics");
      items = await scrapeInfiniteScrollItems(page, extractVOX, "vox");
      allArticles.vox = items;
    } else {
      console.log("errror");
    }

  } else {
    console.log("still loading");
  }

  await browser.close();

    console.timeEnd();
  res.status(200).json(allArticles);
}
