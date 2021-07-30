const request = require("request-promise");
const fs = require("fs");

async function getHtml(url) {
  const html = await request.get(url);
  return html;
}

function saveHtmlToFile(html) {
  fs.writeFileSync("./test.html", html);
}
const address =
  "https://allentown.craigslist.org/d/all-housing-wanted/search/hsw";

async function main() {
  const html = await getHtml(address);
  saveHtmlToFile(html);
}

main();
