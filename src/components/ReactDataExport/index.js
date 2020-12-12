import React from "react";
import ReactExport from "react-data-export";
import { methodology } from "./data/methodology";
import { fe } from "./data/fe";
import { naturalVegitation } from "./data/naturalVegitation";

export default function ReactDataExport() {
  const ExcelFile = ReactExport.ExcelFile;
  const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;

  return (
    <div>
      <ExcelFile element={<button>Download Report</button>} filename="FEReport">
        <ExcelSheet dataSet={methodology} name="Methodology" />
        <ExcelSheet dataSet={fe} name="Fugitive Emission" /> 
        <ExcelSheet dataSet={naturalVegitation} name="Natural Vegitation" /> 
      </ExcelFile>
    </div>
  );
}
