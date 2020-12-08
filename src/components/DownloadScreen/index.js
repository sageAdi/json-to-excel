import React from "react";
import * as XLSX from "xlsx";
import { data, EXCEL_TYPE, EXCEL_EXTENSION } from "../jsonData/data";
import { saveAs } from "file-saver";
import { fugitiveEmissionDescriptionTable } from "../jsonData/fugitiveEmission";

function initilisation() {
  // workbook creation
  const wb = XLSX.utils.book_new();
  wb.Props = {
    Title: "Fugutive Emession Report",
  };
  // worksheet creation
  wb.SheetNames.push("Methodology");
  // create a sheet for data
  const wsData = XLSX.utils.json_to_sheet(data);
  wb.Sheets["Methodology"] = wsData;
  const ws = wb.Sheets["Methodology"];
  ws["!cols"] = [
    {
      wpx: 500,
    },
  ];
  ws["A1"] = {
    t: "s",
    v:
      "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions",
    r:
      "<t>Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions</t>",
    h:
      "<h2>Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions</h2>",
    w:
      "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions",
    z: '"T" #0.00',
  };

  // exporting workbook for download
  const excelDownload = XLSX.write(wb, { bookType: "xlsx", type: "binary" });
  function s2ab(s) {
    var buf = new ArrayBuffer(s.length); //convert s to arrayBuffer
    var view = new Uint8Array(buf); //create uint8array as viewer
    for (var i = 0; i < s.length; i++) view[i] = s.charCodeAt(i) & 0xff; //convert to octet
    return buf;
  }
  saveAs(
    new Blob([s2ab(excelDownload)], { type: "application/octet-stream" }),
    "Fugitive Emission Report.xlsx"
  );
}

function editExcel() {
  const workbook = XLSX.readLine("Fe.xlsx");
  console.log(workbook.SheetNames);
}
function downloadAsExcel() {
  const worksheet1 = XLSX.utils.json_to_sheet(data);
  const worksheet2 = XLSX.utils.json_to_sheet(fugitiveEmissionDescriptionTable);
  const workbook = {
    Sheets: {
      Methodology: worksheet1,
      FugutiveEmession: worksheet2,
    },
    SheetNames: ["Methodology", "FugutiveEmession"],
  };
  const BufferData = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
  saveExcel(BufferData, "Fugutive Emission Report");
}

function saveExcel(buffer, fileName) {
  const Data = new Blob([buffer], { type: EXCEL_TYPE });
  saveAs(Data, fileName + EXCEL_EXTENSION);
}

export default function Download() {
  return (
    <div>
      <button onClick={initilisation}>Download</button>
    </div>
  );
}
