import * as cheerio from "cheerio";
import { parse } from "node-html-parser";

const $ = cheerio.load(
  "<ul>\n" +
    '\t<li><strong><span style="color:#0000CD;">Health ministry in Hamas-run Gaza says war death toll surpasses 10,000.</span></strong></li>\n' +
    '\t<li><strong><span style="color:#0000CD;">Rafah crossing between the Gaza Strip and Egypt reopened Monday to allow the evacuation of foreigners and dual nationals from the Palestinian territory.</span></strong></li>\n' +
    '\t<li><strong><span style="color:#0000CD;">European Commission chief Ursula von der Leyen on Monday said the EU is increasing its humanitarian aid for Gaza by 25 million euros ($27 million).</span></strong></li>\n' +
    '\t<li><strong><span style="color:#0000CD;">Intense Israeli strikes killed more than 200 people overnight in the Gaza Strip.</span></strong></li>\n' +
    "</ul>\n"
);
const ulElm = $("ul");

function parseUl(ul) {
  const ulChild = ul
    .children()
    .toArray()
    .map((li) => ul.html(li))
    .map((liStr) => "<p>" + liStr + "</p>");
  console.log(ulChild);

  return $.html(ulChild);
}
parseUl(ulElm);
// console.log(parseUl(ulElm));
