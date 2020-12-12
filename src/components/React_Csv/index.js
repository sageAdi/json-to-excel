import React from "react";
import { CSVLink, CSVDownload } from "react-csv";

export default function ReactCsv() {
  const headers = [
    { label: "First Name", key: "firstname" },
    { label: "Last Name", key: "lastname" },
    { label: "Email", key: "email" },
  ];

  const data = [
    { firstname: "Ahmed", lastname: "Tomi", email: "ah@smthing.co.com" },
    { firstname: "Raed", lastname: "Labes", email: "rl@smthing.co.com" },
    { firstname: "Yezzi", lastname: "Min l3b", email: "ymin@cocococo.com" },
  ];

  return (
    <div>
      <CSVLink
        data={data}
        headers={headers}
        filename="FeReport.csv"
      >
        Download me
      </CSVLink>
    </div>
  );
}
