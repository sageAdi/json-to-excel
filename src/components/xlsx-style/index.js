import React from 'react'
import * as XLSX from 'xlsx-style'
import { saveAs } from "file-saver";
import { data } from "../jsonData/data";
import { fugitiveEmission } from "../jsonData/fugitiveEmission";

function initilisation() {
  // workbook creation
  const wb = XLSX.utils.book_new();
  wb.Props = {
    Title: "Fugutive Emession Report",
  };
  // worksheet creation
  wb.SheetNames.push("Methodology");
  wb.SheetNames.push("Fugitive Emission");
  // create a sheet for data
  const wsData = XLSX.utils.json_to_sheet(data);
  const wsData2 = XLSX.utils.json_to_sheet(fugitiveEmission, {
    cellStyles: true,
  });
  wb.Sheets["Methodology"] = wsData;
  wb.Sheets["Fugitive Emission"] = wsData2;
  const ws = wb.Sheets["Methodology"];
  const ws2 = wb.Sheets["Fugitive Emission"];
  ws["!cols"] = [
    {
      width: 50,
    },
  ];
  ws["!margins"] = {
    left: 1.0,
    right: 1.0,
    top: 1.0,
    bottom: 1.0,
    header: 0.5,
    footer: 0.5,
  };
  ws2["!cols"] = [
    {
      width: 50,
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

export default function XLSX_STYLE() {
  return (
    <div>
      <button onClick={initilisation}>Download</button>
    </div>
  )
}
