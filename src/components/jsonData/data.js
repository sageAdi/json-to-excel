export const data = [
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "1. Find Building Information and populate all deminsions",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "2. Set contingency factor based on how confident you feel with current P&ID Rev.",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "3. Using the P&IDs count and catorgrize all items were fugitives emsiions may leak from",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "4. Select the appropriate facility type",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "5. Populate gas stream information.",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "Formula's Used in Calculations ",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "Corrected Volume [ft3/lb-mol] = V",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "V = (Vconst x Ta) / Tconst",
    "": "Where:",
    " ": "Vconst = 359 [ft3]",
  },
  { " ": "Ta = Ambient Building Temperature in Rankine" },
  { " ": "Tconst = 492 [R]" },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "Total Hydrocarbon leak Rate [cfm] = G",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "G = [( E) (V)] / [60 x mwavg] ",
    "": "Where:",
    " ": "E = Emission Rate [lb/hr]",
  },
  { " ": "V = Corrected Volume [ft3/lb-mol]" },
  { " ": "mwavg = Average Molecular Weight" },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "Fresh Air Introduction Rate [cfm] = Qr",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "Qr = G/C",
    "": "Where:",
    " ": "G = Total Hydrocarbon Leak Rate [cfm]",
  },
  { " ": "C = LEL x 5% concentration" },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "Minimum Fresh Air Introduction Rate [cfm] = Q",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "Q = Qr x 4",
    "": "Where:",
    " ": "Qr = Fresh Air Quality Rate [cfm]",
  },
  { " ": "4 = Safety Factor (API RP-505 para. )" },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "Minimum Air Change Required Per Hour",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "= (Q x 60) /Bldg. Vol.",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "Steps to Calculate the Buildings Natural Ventilation ",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "1. Measure the distance from the center of the lower and upper building vents",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "2. Determine the number and size of vents on building",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "3. Determine what case you would like to study to set louver opening percent (i.e. 100% open for summer season)",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "Formula's Used in Calculations ",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "Neutral Pressure Level [m] = h",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "h=",
    "  ": "H",
    "   ": "(Assume Ti > To)",
    "": "Where:",
    " ": "h = Neutral Pressure Level above center of lower vent [m]",
  },
  {
    "  ": "1 + [(A1/A2)2(Ti/To)]",
    " ": "A1 = Free area of lower vent [m2]",
  },
  { " ": "A2 = Free area of upper vent [m2]" },
  { " ": "Ti = Internal Building Tempature [K]" },
  { " ": "To = External Building Tempature [K]" },
  {
    " ": "H = Vertical distance (center-t-center) between A1 and A2 [m]",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "Air Flow due to Stack Effect [m3/hr] = Q",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "Q = [15940 (Cv)(A) [h (Ti - To) / Ti]1/2 ] x 2",
    "": "Where:",
    " ": "15940 = Conversion Factor",
  },
  { " ": "Cv = Effectiveness of Openings (Percent open values)" },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "If A1 and A2 are not equal, Q is multiplyed but corrention \n",
    " ": "A = Area of the  smallest of the lower and upeer vents [m2]",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "factor from API RP-500 Figure 1.",
    " ": "h = Neutral Pressure Level [m]",
  },
  { " ": "Ti = Internal Building Tempature [K]" },
  { " ": "To = External Building Tempature [K]" },
  { " ": "2 = Safety Factor (API RP-500 para. 6.3.2.4.5)" },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "Air Changes Per Hour due to Stack Effect",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "= (Q x 60) /Bldg. Vol.",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "References",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "[1]",
    "  ": "API RP-505",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "[2]",
    "  ": "API RP-500",
  },
  {
    "Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions":
      "[3]",
    "  ": "ASHRAE Handbook, Chapter 22",
  },
];

export const EXCEL_TYPE =
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
export const EXCEL_EXTENSION = ".xlsx";
