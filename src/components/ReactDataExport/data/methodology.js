export const methodology = [
  {
    columns: [
      { title: " " },
      { title: " " },
      { title: " " },
      { title: " " },
      { title: " " },
    ],
    data: [
      [
        {
          value:
            "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions",
          style: {
            font: { sz: "14", bold: true },
          },
        },
      ],
      [
        {
          value: "1. Find Building Information and populate all deminsions",
        },
      ],
      [
        {
          value:
            "2. Set contingency factor based on how confident you feel with current P&ID Rev.",
        },
      ],
      [
        {
          value:
            "3. Using the P&IDs count and catorgrize all items were fugitives emsiions may leak from",
        },
      ],
      [
        {
          value: "4. Select the appropriate facility type",
        },
      ],
      [
        {
          value: "5. Populate gas stream information.",
        },
      ],
      [
        {
          value: "Formula's Used in Calculations",
        },
      ],
      [
        {
          value: "Corrected Volume [ft3/lb-mol] = V",
          style: { font: { underline: true } },
        },
      ],
      [
        {
          value: "V = (Vconst x Ta) / Tconst",
          style: { font: { color: { rgb: "#5bc0de" } } },
        },
        {
          value: "Where:",
        },
        {
          value: "Vconst = 359 [ft3]",
        },
      ],
      [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "Ta = Ambient Building Temperature in Rankine",
        },
      ],
      [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "Tconst = 492 [R]",
        },
      ],
      [
        {
          value: "Total Hydrocarbon leak Rate [cfm] = G",
          style: { font: { underline: true } },
        },
      ],
      [
        {
          value: "G = [( E) (V)] / [60 x mwavg]",
          style: { font: { color: { rgb: "#5bc0de" } } },
        },
        {
          value: "Where:",
        },
        {
          value: "E = Emission Rate [lb/hr]",
        },
      ],
      [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "V = Corrected Volume [ft3/lb-mol]",
        },
      ],
      [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "mwavg = Average Molecular Weight",
        },
      ],
      [
        {
          value: "Fresh Air Introduction Rate [cfm] = Qr",
          style: { font: { underline: true } },
        },
      ],
      [
        {
          value: "Qr = G/C",
          style: { font: { color: { rgb: "#5bc0de" } } },
        },
        {
          value: "Where:",
        },
        {
          value: "G = Total Hydrocarbon Leak Rate [cfm]",
        },
      ],
      [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "C = LEL x 5% concentration",
        },
      ],
      [
        {
          value: "Minimum Fresh Air Introduction Rate [cfm] = Q",
          style: { font: { underline: true } },
        },
      ],
      [
        {
          value: "Q = Qr x 4",
          style: { font: { color: { rgb: "#5bc0de" } } },
        },
        {
          value: "Where:",
        },
        {
          value: "Qr = Fresh Air Quality Rate [cfm]",
        },
      ],
      [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "4 = Safety Factor (API RP-505 para. )",
        },
      ],
      [
        {
          value: "Minimum Air Change Required Per Hour",
          style: { font: { underline: true } },
        },
      ],
      [
        {
          value: "= (Q x 60) /Bldg. Vol.",
          style: { font: { color: { rgb: "#5bc0de" } } },
        },
      ],
      [
        {
          value: "Steps to Calculate the Buildings Natural Ventilation",
          style: { font: { sz: "14", bold: true } },
        },
      ],
      [
        {
          value:
            "1. Measure the distance from the center of the lower and upper building vents",
        },
      ],
      [
        {
          value: "2. Determine the number and size of vents on building",
        },
      ],
      [
        {
          value:
            "3. Determine what case you would like to study to set louver opening percent (i.e. 100% open for summer season)",
        },
      ],
      [
        {
          value: "Formula's Used in Calculations ",
        },
      ],
      [
        {
          value: "Neutral Pressure Level [m] = h",
        },
      ],
      [
        {
          value: "h=",
          style: { alignment: { horizontal: "right" } },
        },
        {
          value: "H",
          style: {
            border: { bottom: { style: "medium", color: "#000" } },
            alignment: { horizontal: "center" },
          },
        },
        {
          value: "(Assume Ti > To)",
        },
        {
          value: "Where:",
          style: { alignment: { vertical: "center" } },
        },
        {
          value: "h = Neutral Pressure Level above center of lower vent [m]",
        },
      ],
      [
        {
          value: "",
        },
        {
          value: "1 + [(A1/A2)2(Ti/To)]",
          style: { alignment: { horizontal: "center" } },
        },
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "A1 = Free area of lower vent [m2]",
        },
      ],
      [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "A2 = Free area of upper vent [m2]",
        },
      ],
      [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "Ti = Internal Building Tempature [K]",
        },
      ],
      [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "To = External Building Tempature [K]",
        },
      ],
      [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value:
            "H = Vertical distance (center-t-center) between A1 and A2 [m]",
        },
      ],
      [
        {
          value: "Air Flow due to Stack Effect [m3/hr] = Q",
          style: { font: { underline: true } },
        },
      ],
      [
        {
          value: "Q = [15940 (Cv)(A) [h (Ti - To) / Ti]1/2 ] x 2",
        },
        {
          value: "Where:",
        },
        {
          value: "15940 = Conversion Factor",
        },
      ],
      [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "Cv = Effectiveness of Openings (Percent open values)",
        },
      ],
      [
        {
          value: "If A1 and A2 are not equal, Q is multiplyed but corrention",
        },
      ],
      [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "A = Area of the  smallest of the lower and upeer vents [m2]",
        },
      ],
      [
        {
          value: "factor from API RP-500 Figure 1.",
        },
        {
          value: "",
        },
        {
          value: "h = Neutral Pressure Level [m]",
        },
      ],
      [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "Ti = Internal Building Tempature [K]",
        },
      ],
      [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "To = External Building Tempature [K]",
        },
      ],
      [
        {
          value: "",
        },
        {
          value: "",
        },
        {
          value: "2 = Safety Factor (API RP-500 para. 6.3.2.4.5)",
        },
      ],
      [
        {
          value: "Air Changes Per Hour due to Stack Effect",
          style: { font: { underline: true } },
        },
      ],
      [
        {
          value: "= (Q x 60) /Bldg. Vol.",
        },
      ],
      [
        {
          value: "References",
        },
      ],
      [
        {
          value: "[1]",
          style: { alignment: { horizontal: "right" } },
        },
        {
          value: "API RP-505",
        },
      ],
      [
        {
          value: "[2]",
          style: { alignment: { horizontal: "right" } },
        },
        {
          value: "API RP-500",
        },
      ],
      [
        {
          value: "[3]",
          style: { alignment: { horizontal: "right" } },
        },
        {
          value: "ASHRAE Handbook, Chapter 22",
        },
      ],
    ],
  },
];
