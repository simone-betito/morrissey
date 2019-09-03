const fs = require("fs");
const cheerio = require("cheerio");
const content = fs.readFileSync("data/raw.html");
const $ = cheerio.load(content);

const dates = $("li")
  .map((i, el) => {
    return {
      index: i,
      date: $(el)
        // .slice(0, 1)
        // .html(),
        .text()
        .substring(0, 12)
        .trim(),
      location: $(el)
        // .slice(0, 1)
        // .html()
        .text()
        .substring(12)
        .trim()
    };
  })
  .get();

fs.writeFile("data/dates.json", JSON.stringify(dates));
