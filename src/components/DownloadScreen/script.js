var xlsx = require("xlsx");

const wb = xlsx.readFile("FEReport.xlsx");
const ws = wb.Sheets["Methodology"];
const jsonData = xlsx.utils.sheet_to_json(ws);
// xlsx.writeFile(jsonData, "methods.json");
ws["A1"]={t:'s',v:'Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions'}
console.log(ws["A1"]);

// const wb = xlsx.readFile("data.js");
// console.log(wb);
