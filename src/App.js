import React from "react";
import Example from "./components/Example";
import ReactDataExport from "./components/ReactDataExport";
// import ReactJsonCsv from "./components/ReactJsonCsv";
// import Download from "./components/DownloadScreen";
// import ReactCsv from "./components/React_Csv";
// import XLSX_STYLE from "./components/xlsx-style";
export default function App() {
  return (
    <div>
      {/* <ReactCsv /> */}
      <Example />
      <ReactDataExport />
    </div>
  );
}
