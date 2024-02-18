const str =
  '<blockquote class="twitter-tweet">\n' +
  '<p dir="ltr" lang="en">The humanitarian situation in Gaza is horrific.<br />\n' +
  "<br />\n" +
  "I renew my appeals for a humanitarian ceasefire and the immediate release of all hostages.<br />\n" +
  "<br />\n" +
  'All those with influence must exert it to ensure respect for the rules of war, end the suffering and avoid a spillover of the conflict. <a href="https://t.co/9r8jUwlDvJ">pic.twitter.com/9r8jUwlDvJ</a></p>\n' +
  '&mdash; Ant&oacute;nio Guterres (@antonioguterres) <a href="https://twitter.com/antonioguterres/status/1720840106402033863?ref_src=twsrc%5Etfw">November 4, 2023</a></blockquote>\n' +
  '<script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>';

const data = str.replaceAll("\n", "\\n");
// const main = btoa(data);
console.log(data);
