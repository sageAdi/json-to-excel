export const data = [
  {
    building_parameters: {
      building_id: "",
      Description: "",
      name: "",
      plant_name: "",
      plant_id: "",
      facility_type: "facility_type_4",
      "Maximum Ambient Temperature": {
        C: 30.0,
        F: 86.0,
        R: 546.0,
      },
      "Length(m)": 11.6,
      "Width(m)": 4.4,
      "Cavity Length(m)": 0.0,
      "Cavity Width(m)": 0.0,
      "Length of Vessel(m)": 0.0,
      "Radius of Vessel(m)": 0.0,
      "Height to Eave(m)": 3.042,
      "Height from Eave to Peak(m)": 0.83,
      "Base Area(m2)": 51.04,
      "Volume from Eave to Peak(m3)": 21.182,
      "Volume up to Eave(m3)": 155.264,
      "Volume of Vessel(m3)": 0.0,
      "Total Volume(m3)": 176.445,
      "Bldg volume that contains equipment(%)": 20,
      "Building Volume Without Equipment(cu-m)": 141.16,
      "Building Volume Without Equipment(cu-ft)": 4984.89,
      "Max % of Lower Explosive Limit (LEL)": 25.0,
      "Contingency Factor (CF) %": 15.0,
      pnids: [
        "ABC 16332-PID-00-01-146",
        "ABC 16332-PID-00-01-147",
        "ABC 16332-PID-00-01-148",
        "ABC 16332-PID-00-01-149",
        "ABC 16332-PID-00-01-150",
        "ABC 16332-PID-00-01-151",
      ],
    },
    items_per_substance: [
      {
        pnId: "ABC 16332-PID-00-01-146",
        acid_gas: {
          connections: 14,
          flanges: 31,
          "open-endeds": 3,
          pumps: 0,
          valves: 24,
          others: 8,
        },
        condensate: {
          connections: 14,
          flanges: 28,
          "open-endeds": 3,
          pumps: 0,
          valves: 21,
          others: 12,
        },
        fuel_gas: {
          connections: 8,
          flanges: 0,
          "open-endeds": 0,
          pumps: 0,
          valves: 4,
          others: 1,
        },
      },
    ],
    past_revisions: [
      {
        name: "A",
        description: "Issued for review",
        date: "29-Sep-17",
        generated_by: "RWS",
        checked_by: "TA",
        approved_by: "",
      },
    ],
  },
];

export const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
export const EXCEL_EXTENSION = ".xlsx";
