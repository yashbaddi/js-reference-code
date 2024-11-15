function convertToCSV(arr) {
  const array = [Object.keys(arr[0])].concat(arr);

  return array
    .map((it) => {
      return Object.values(it).toString();
    })
    .join("\n");
}

const arr = [
  {
    id: "A2EUQ1WTGCTBG2",
    code: "ca",
    name: "Canada",
    region: Region.NA,
    currencyCode: "CAD",
    sellerCentralUrl: "https://sellercentral.amazon.ca",
  },
  {
    id: "ATVPDKIKX0DER",
    code: "us",
    name: "United States of America",
    region: Region.NA,
    currencyCode: "USD",
    sellerCentralUrl: "https://sellercentral.amazon.com",
  },
  {
    id: "A1AM78C64UM0Y8",
    code: "mx",
    name: "Mexico",
    region: Region.NA,
    currencyCode: "MXN",
    sellerCentralUrl: "https://sellercentral.amazon.com.mx",
  },
  {
    id: "A2Q3Y263D00KWC",
    code: "br",
    name: "Brazil",
    region: Region.NA,
    currencyCode: "BRL",
    sellerCentralUrl: "https://sellercentral.amazon.com.br",
  },
  {
    id: "A1RKKUPIHCS9HS",
    code: "es",
    name: "Spain",
    region: Region.EU,
    currencyCode: "EUR",
    sellerCentralUrl: "https://sellercentral-europe.amazon.com",
  },
  {
    id: "A1F83G8C2ARO7P",
    code: "uk",
    name: "United Kingdom",
    region: Region.EU,
    currencyCode: "GBP",
    sellerCentralUrl: "https://sellercentral-europe.amazon.com",
  },
  {
    id: "A13V1IB3VIYZZH",
    code: "fr",
    name: "France",
    region: Region.EU,
    currencyCode: "EUR",
    sellerCentralUrl: "https://sellercentral-europe.amazon.com",
  },
  {
    id: "AMEN7PMS3EDWL",
    code: "be",
    name: "Belgium",
    region: Region.EU,
    currencyCode: "EUR",
    sellerCentralUrl: "https://sellercentral.amazon.nl",
  },
  {
    id: "A1805IZSGTT6HS",
    code: "nl",
    name: "Netherlands",
    region: Region.EU,
    currencyCode: "EUR",
    sellerCentralUrl: "https://sellercentral-europe.amazon.com",
  },
  {
    id: "A1PA6795UKMFR9",
    code: "de",
    name: "Germany",
    region: Region.EU,
    currencyCode: "EUR",
    sellerCentralUrl: "https://sellercentral-europe.amazon.com",
  },
  {
    id: "APJ6JRA9NG5V4",
    code: "it",
    name: "Italy",
    region: Region.EU,
    currencyCode: "EUR",
    sellerCentralUrl: "https://sellercentral.amazon.se",
  },
  {
    id: "A2NODRKZP88ZB9",
    code: "se",
    name: "Sweden",
    region: Region.EU,
    currencyCode: "SEK",
    sellerCentralUrl: "https://sellercentral.amazon.pl",
  },
  {
    id: "AE08WJ6YKNBMC",
    code: "za",
    name: "South Africa",
    region: Region.EU,
    currencyCode: "ZAR",
    sellerCentralUrl: "https://sellercentral.amazon.eg",
  },
  {
    id: "A1C3SOZRARQ6R3",
    code: "pl",
    name: "Poland",
    region: Region.EU,
    currencyCode: "PLN",
    sellerCentralUrl: "https://sellercentral.amazon.com.tr",
  },
  {
    id: "ARBP9OOSHTCHU",
    code: "eg",
    name: "Egypt",
    region: Region.EU,
    currencyCode: "EGP",
    sellerCentralUrl: "https://sellercentral.amazon.com.sa",
  },
  {
    id: "A33AVAJ2PDY3EV",
    code: "tr",
    name: "Turkey",
    region: Region.EU,
    currencyCode: "TRY",
    sellerCentralUrl: "https://sellercentral.amazon.ae",
  },
  {
    id: "A17E79C6D8DWNP",
    code: "sa",
    name: "Saudi Arabia",
    region: Region.EU,
    currencyCode: "SAR",
    sellerCentralUrl: "https://sellercentral.amazon.in",
  },
  {
    id: "A2VIGQ35RCS4UG",
    code: "ae",
    name: "United Arab Emirates",
    region: Region.EU,
    currencyCode: "AED",
    sellerCentralUrl: "https://sellercentral.amazon.sg",
  },
  {
    id: "A21TJRUUN4KGV",
    code: "in",
    name: "India",
    region: Region.EU,
    currencyCode: "INR",
    sellerCentralUrl: "https://sellercentral.amazon.com.au",
  },
  {
    id: "A19VAU5U5O7RUS",
    code: "sg",
    name: "Singapore",
    region: Region.FE,
    currencyCode: "SGD",
    sellerCentralUrl: "https://sellercentral.amazon.co.jp",
  },
  {
    id: "A39IBJ37TRP1C6",
    code: "au",
    name: "Australia",
    region: Region.FE,
    currencyCode: "AUD",
    sellerCentralUrl: "https://sellercentral.amazon.sg",
  },
  {
    id: "A1VC38T7YXB528",
    code: "jp",
    name: "Japan",
    region: Region.FE,
    currencyCode: "JPY",
    sellerCentralUrl: "https://sellercentral.amazon.com.au",
  },
];

console.log(convertToCSV(arr));
