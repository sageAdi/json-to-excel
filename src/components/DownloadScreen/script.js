var xlsx = require("xlsx");

const wb = xlsx.readFile("FEReport.xlsx");
const ws = wb.Sheets["Fugitive Emissions"];
const jsonData = xlsx.utils.sheet_to_json(ws);
// xlsx.writeFile(jsonData, "methods.json");

console.log(wb.SheetNames);

// const wb = xlsx.readFile("data.js");
// console.log(wb);
