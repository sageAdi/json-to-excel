export const methodologyHeaderOne = [
  {
    title:
      'Steps to Calculate Fugitive Emissions Required Ventilation due to Fugitive Emissions',
    details: [
      { value: '1. Find Building Information and populate all deminsions' },
      {
        value:
          '2. Set contingency factor based on how confident you feel with current P&ID Rev.',
      },
      {
        value:
          '3. Using the P&IDs count and catorgrize all items were fugitives emsiions may leak from',
      },
      { value: '4. Select the appropriate facility type' },
      { value: '5. Populate gas stream information.' },
    ],
  },
];
export const methodologyFormulaOne = [
  {
    formula: "Formula's Used in Calculations",
    formulaDetails: [
      {
        formulaName: [
          { value: 'Corrected Volume [ft3/lb-mol] = V' },
          { value: 'V = (Vconst x Ta) / Tconst' },
        ],
        formulaVariable: [
          { value: 'Where:' },
          { value: 'Vconst = 359 [ft3]' },
          { value: 'Ta = Ambient Building Temperature in Rankine' },
          { value: 'Tconst = 492 [R]' },
        ],
      },
      {
        formulaName: [
          { value: 'Total Hydrocarbon leak Rate [cfm] = G' },
          { value: 'G = [( E) (V)] / [60 x mwavg]' },
        ],
        formulaVariable: [
          { value: 'Where:' },
          { value: 'E = Emission Rate [lb/hr]' },
          { value: 'V = Corrected Volume [ft3/lb-mol]' },
          { value: 'mwavg = Average Molecular Weight' },
        ],
      },
      {
        formulaName: [
          { value: 'Fresh Air Introduction Rate [cfm] = Qr' },
          { value: 'Qr = G/C' },
        ],
        formulaVariable: [
          { value: 'Where:' },
          { value: 'G = Total Hydrocarbon Leak Rate [cfm]' },
          { value: 'C = LEL x 5% concentration' },
        ],
      },
      {
        formulaName: [
          { value: 'Minimum Fresh Air Introduction Rate [cfm] = Q' },
          { value: 'Q = Qr x 4' },
          {
            value:
              'Minimum Air Change Required Per Hour = (Q x 60) /Bldg. Vol.',
          },
        ],
        formulaVariable: [
          { value: 'Where:' },
          { value: 'Qr = Fresh Air Quality Rate [cfm]' },
          { value: '4 = Safety Factor (API RP-505 para. )' },
        ],
      },
    ],
  },
];

export const methodologyHeaderTwo = [
  {
    title: 'Steps to Calculate the Buildings Natural Ventilation',
    details: [
      {
        value:
          '1. Measure the distance from the center of the lower and upper building vents',
      },
      { value: '2. Determine the number and size of vents on building' },
      {
        value:
          '3. Determine what case you would like to study to set louver opening percent (i.e. 100% open for summer season)',
      },
    ],
  },
];

export const methodologyFormulaTwo = [
  {
    formula: "Formula's Used in Calculations",
    formulaDetails: [
      {
        formulaName: [
          { value: 'Neutral Pressure Level [m] = h' },
          { value: 'h=H/(1 + [(A1/A2)2(Ti/To)])' },
          { value: '(Assume Ti > To)' },
        ],
        formulaVariable: [
          { value: 'Where:' },
          {
            value: 'h = Neutral Pressure Level above center of lower vent [m]',
          },
          { value: 'A1 = Free area of lower vent [m2]' },
          { value: 'A2 = Free area of upper vent [m2]' },
          { value: 'Ti = Internal Building Tempature [K]' },
          { value: 'To = External Building Tempature [K]' },
          {
            value:
              'H = Vertical distance (center-t-center) between A1 and A2 [m]',
          },
        ],
      },
      {
        formulaName: [
          { value: 'Air Flow due to Stack Effect [m3/hr] = Q' },
          { value: 'Q = [15940 (Cv)(A) [h (Ti - To) / Ti]1/2 ] x 2' },
          {
            value:
              'Air Changes Per Hour due to Stack Effect = (Q x 60) /Bldg. Vol.',
          },
        ],
        formulaVariable: [
          { value: 'Where:' },
          { value: '15940 = Conversion Factor' },
          { value: 'Cv = Effectiveness of Openings (Percent open values)' },
          {
            value: 'If A1 and A2 are not equal, Q is multiplyed but corrention',
          },
          {
            value:
              'A = Area of the  smallest of the lower and upeer vents [m2]',
          },
          { value: 'factor from API RP-500 Figure 1.' },
          { value: 'h = Neutral Pressure Level [m]' },
          { value: 'Ti = Internal Building Tempature [K]' },
          { value: 'To = External Building Tempature [K]' },
          { value: '2 = Safety Factor (API RP-500 para. 6.3.2.4.5)' },
        ],
      },
    ],
  },
];

export const methodologyReference = [
  {
    title: 'References',
    details: [
      { value: '[1] API RP-505' },
      { value: '[2] API RP-500' },
      { value: '[3] ASHRAE Handbook, Chapter 22' },
    ],
  },
];
