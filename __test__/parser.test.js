const parser = require("../parser");
// fs enables you to save your files.
const fs = require("fs");
let html;
let listings;

//before all tells the file to run all this code before the test starts.
beforeAll(() => {
  html = fs.readFileSync("./test.html");
  listings = parser.listings(html);
});

it("Should give the correct listing object", () => {
  expect(listings.length).toBe(120);
});

it("Should get correct title", () => {
  expect(listings[0].title).toBe(
    "🚨Can Close Quickly! Looking for a Win Win Situation! 🚨"
  );
});

it("Should get correct url", () => {
  expect(listings[0].url).toBe(
    "https://allentown.craigslist.org/sbw/d/can-close-quickly-looking-for-win-win/7347878852.html"
  );
});

it("Should get hood from listing", () => {
  expect(listings[0].hood).toBe(" (Allentown + Surrounding Areas)");
});

it("Should get correct date from listings", () => {
  expect(listings[0].datePosted).toStrictEqual(new Date("2021-07-30 07:10"));
});
