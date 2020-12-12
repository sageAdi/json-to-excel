export const details = [
  {
    Column1: "1. Find Building Information and populate all deminsions",
  },
  {
    Column1:
      "2. Set contingency factor based on how confident you feel with current P&ID Rev.",
  },
  {
    Column1:
      "3. Using the P&IDs count and catorgrize all items were fugitives emsiions may leak from",
  },
  {
    Column1: "4. Select the appropriate facility type",
  },
  {
    Column1: "5. Populate gas stream information.",
  },
  {
    Column1: "Formula's Used in Calculations ",
  },
  {
    Column1: "Corrected Volume [ft3/lb-mol] = V",
  },
  {
    Column1: "V = (Vconst x Ta) / Tconst",
    Column2: "Where:",
    Column3: "Vconst = 359 [ft3]",
  },
  { Column3: "Ta = Ambient Building Temperature in Rankine" },
  { Column3: "Tconst = 492 [R]" },
  {
    Column1: "Total Hydrocarbon leak Rate [cfm] = G",
  },
  {
    Column1: "G = [( E) (V)] / [60 x mwavg] ",
    Column2: "Where:",
    Column3: "E = Emission Rate [lb/hr]",
  },
  { Column3: "V = Corrected Volume [ft3/lb-mol]" },
  { Column3: "mwavg = Average Molecular Weight" },
  {
    Column1: "Fresh Air Introduction Rate [cfm] = Qr",
  },
  {
    Column1: "Qr = G/C",
    Column2: "Where:",
    Column3: "G = Total Hydrocarbon Leak Rate [cfm]",
  },
  { Column3: "C = LEL x 5% concentration" },
  {
    Column1: "Minimum Fresh Air Introduction Rate [cfm] = Q",
  },
  {
    Column1: "Q = Qr x 4",
    Column2: "Where:",
    Column3: "Qr = Fresh Air Quality Rate [cfm]",
  },
  { Column3: "4 = Safety Factor (API RP-505 para. )" },
  {
    Column1: "Minimum Air Change Required Per Hour",
  },
  {
    Column1: "= (Q x 60) /Bldg. Vol.",
  },
  {
    Column1: "Steps to Calculate the Buildings Natural Ventilation ",
  },
  {
    Column1:
      "1. Measure the distance from the center of the lower and upper building vents",
  },
  {
    Column1: "2. Determine the number and size of vents on building",
  },
  {
    Column1:
      "3. Determine what case you would like to study to set louver opening percent (i.e. 100% open for summer season)",
  },
  {
    Column1: "Formula's Used in Calculations ",
  },
  {
    Column1: "Neutral Pressure Level [m] = h",
  },
  {
    Column1: "h=",
    Column4: "H",
    Column5: "(Assume Ti > To)",
    Column2: "Where:",
    Column3: "h = Neutral Pressure Level above center of lower vent [m]",
  },
  {
    Column4: "1 + [(A1/A2)2(Ti/To)]",
    Column3: "A1 = Free area of lower vent [m2]",
  },
  { Column3: "A2 = Free area of upper vent [m2]" },
  { Column3: "Ti = Internal Building Tempature [K]" },
  { Column3: "To = External Building Tempature [K]" },
  {
    Column3: "H = Vertical distance (center-t-center) between A1 and A2 [m]",
  },
  {
    Column1: "Air Flow due to Stack Effect [m3/hr] = Q",
  },
  {
    Column1: "Q = [15940 (Cv)(A) [h (Ti - To) / Ti]1/2 ] x 2",
    Column2: "Where:",
    Column3: "15940 = Conversion Factor",
  },
  { Column3: "Cv = Effectiveness of Openings (Percent open values)" },
  {
    Column1: "If A1 and A2 are not equal, Q is multiplyed but corrention \n",
    Column3: "A = Area of the  smallest of the lower and upeer vents [m2]",
  },
  {
    Column1: "factor from API RP-500 Figure 1.",
    Column3: "h = Neutral Pressure Level [m]",
  },
  { Column3: "Ti = Internal Building Tempature [K]" },
  { Column3: "To = External Building Tempature [K]" },
  { Column3: "2 = Safety Factor (API RP-500 para. 6.3.2.4.5)" },
  {
    Column1: "Air Changes Per Hour due to Stack Effect",
  },
  {
    Column1: "= (Q x 60) /Bldg. Vol.",
  },
  {
    Column1: "References",
  },
  {
    Column1: "[1]",
    Column2: "API RP-505",
  },
  {
    Column1: "[2]",
    Column2: "API RP-500",
  },
  {
    Column1: "[3]",
    Column2: "ASHRAE Handbook, Chapter 22",
  },
];

export const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
export const EXCEL_EXTENSION = ".xlsx";
