const converter = require("json-2-csv");

const documents = require("./data/dates.json");
const fs = require("fs");

let options = {
  delimiter: {
    wrap: '"', // Double Quote (") character
    field: ",", // Comma field delimiter
    eol: "\n" // Newline delimiter
  },
  prependHeader: true,
  sortHeader: false,
  excelBOM: true,
  trimHeaderValues: true,
  trimFieldValues: true,
  keys: ["index", "date", "location"]
};

let json2csvCallback = function(err, csv) {
  if (err) throw err;
  //   console.log(csv);
  fs.writeFile("./data/dates.csv", csv);
};

converter.json2csv(documents, json2csvCallback, options);
