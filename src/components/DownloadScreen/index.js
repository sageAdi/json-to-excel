import React from "react";
import * as XLSX from "xlsx";
import { data, EXCEL_TYPE, EXCEL_EXTENSION } from "../jsonData/data";
import { saveAs } from "file-saver";
import { fugitiveEmissionDescriptionTable } from "../jsonData/fugitiveEmission";

function readExcel() {
  const workbook = XLSX.read("FEReport.xlsx");
  console.log(workbook.Sheets["Sheet1"]);
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
      <button onClick={readExcel}>Download</button>
    </div>
  );
}
