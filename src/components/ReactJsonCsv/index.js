import React, { useState } from "react";
import { JsonToCsv, useJsonToCsv } from "react-json-csv";

export default function ReactJsonCsv() {
  const [download, setDownload] = useState(false);
  const filename = "Csv-file",
    fields = {
      index: "Index",
      guid: "GUID",
    },
    style = {
      padding: "50px",
    },
    data = [
      { index: 0, guid: "asdf231234" },
      { index: 1, guid: "wetr2343af" },
    ],
    text = "Convert Json to Csv";
  // const { saveAsCsv } = useJsonToCsv();
  // console.log(saveAsCsv);
  const handleDownload = () => {
    setDownload(true);
  };
  return (
    <JsonToCsv
      data={data}
      filename={filename}
      fields={fields}
      style={style}
      text={text}
    />
  );
}
