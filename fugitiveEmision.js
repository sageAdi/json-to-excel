/* eslint-disable no-plusplus */
const { fe_report } = require("./input");
const fs = require("fs");

const { facility_type } = fe_report.caliculation_summary;
let spaceManage =
  fe_report.items_per_substance.length +
  Object.keys(fe_report.aggregated_items_for_substance).length;
fe_report.items_per_substance.map((value) => {
  spaceManage += Object.keys(value).length;
});
const dynamicData = {};

const handleAggregateTtemsForSubstance = () => {
  const dynamicHeader = {};
  const dynamicHeaderTitle = {};
  const dynamicConnection = {};
  const dynamicFlanges = {};
  const dynamicOpenEndeds = {};
  const dynamicPumps = {};
  const dynamicValves = {};
  const dynamicOthers = {};
  let count = 1;

  dynamicHeader[`col_${count++}`] = "";
  dynamicHeader[`col_${count++}`] = "Number of Items Per Substance";
  let space = 1;
  if (Object.keys(fe_report.aggregated_items_for_substance).length < 7)
    space = 9;
  else {
    space = 2 + Object.keys(fe_report.aggregated_items_for_substance).length;
  }
  for (let i = 0; i < space; i++) {
    dynamicHeader[`col_${count++}`] = "";
  }
  fe_report.items_per_substance.forEach((value) => {
    dynamicHeader[`col_${count++}`] = "P&ID Name:";
    dynamicHeader[`col_${count++}`] = value.pnId;
    for (let i = 0; i < Object.keys(value).length - 3; i++) {
      dynamicHeader[`col_${count++}`] = "";
    }
  });

  fe_report.items_per_substance.forEach((value) => {
    let count = 1;

    dynamicHeaderTitle[`col_${count}`] = "";
    dynamicConnection[`col_${count}`] = "";
    dynamicFlanges[`col_${count}`] = "";
    dynamicOpenEndeds[`col_${count}`] = "";
    dynamicPumps[`col_${count}`] = "";
    dynamicValves[`col_${count}`] = "";
    dynamicOthers[`col_${count++}`] = "";

    dynamicHeaderTitle[`col_${count}`] = "Items";
    dynamicConnection[`col_${count}`] = "Connections";
    dynamicFlanges[`col_${count}`] = "Flanges";
    dynamicOpenEndeds[`col_${count}`] = "Open Endeds";
    dynamicPumps[`col_${count}`] = "Pumps";
    dynamicValves[`col_${count}`] = "Valves";
    dynamicOthers[`col_${count++}`] = "Others";

    // For Spacing
    for (let i = 0; i < 2; i++) {
      dynamicHeaderTitle[`col_${count}`] = "";
      dynamicConnection[`col_${count}`] = "";
      dynamicFlanges[`col_${count}`] = "";
      dynamicOpenEndeds[`col_${count}`] = "";
      dynamicPumps[`col_${count}`] = "";
      dynamicValves[`col_${count}`] = "";
      dynamicOthers[`col_${count++}`] = "";
    }

    for (const key in fe_report.aggregated_items_for_substance) {
      if (key !== "pnId") {
        dynamicHeaderTitle[`col_${count}`] = key;
        dynamicConnection[`col_${count}`] =
          fe_report.aggregated_items_for_substance[key].connections;
        dynamicFlanges[`col_${count}`] =
          fe_report.aggregated_items_for_substance[key].flanges;
        dynamicOpenEndeds[`col_${count}`] =
          fe_report.aggregated_items_for_substance[key]["open-endeds"];
        dynamicPumps[`col_${count}`] =
          fe_report.aggregated_items_for_substance[key].pumps;
        dynamicValves[`col_${count}`] =
          fe_report.aggregated_items_for_substance[key].valves;
        dynamicOthers[`col_${count++}`] =
          fe_report.aggregated_items_for_substance[key].others;
      }
    }

    // For Spacing
    let space = 1;
    if (Object.keys(fe_report.aggregated_items_for_substance).length < 7)
      space = 8 - Object.keys(fe_report.aggregated_items_for_substance).length;
    for (let i = 0; i < space; i++) {
      dynamicHeaderTitle[`col_${count}`] = "";
      dynamicConnection[`col_${count}`] = "";
      dynamicFlanges[`col_${count}`] = "";
      dynamicOpenEndeds[`col_${count}`] = "";
      dynamicPumps[`col_${count}`] = "";
      dynamicValves[`col_${count}`] = "";
      dynamicOthers[`col_${count++}`] = "";
    }

    fe_report.items_per_substance.map((value) => {
      for (const key in value) {
        if (key !== "pnId") {
          dynamicHeaderTitle[`col_${count}`] = key;
          dynamicConnection[`col_${count}`] = value[key].connections;
          dynamicFlanges[`col_${count}`] = value[key].flanges;
          dynamicOpenEndeds[`col_${count}`] = value[key]["open-endeds"];
          dynamicPumps[`col_${count}`] = value[key].pumps;
          dynamicValves[`col_${count}`] = value[key].valves;
          dynamicOthers[`col_${count++}`] = value[key].others;
        }
      }
    });
  });
  dynamicData.header = dynamicHeader;
  dynamicData.title = dynamicHeaderTitle;
  dynamicData.connection = dynamicConnection;
  dynamicData.flanges = dynamicFlanges;
  dynamicData.open_endeds = dynamicOpenEndeds;
  dynamicData.pumps = dynamicPumps;
  dynamicData.valve = dynamicValves;
  dynamicData.others = dynamicOthers;
  return dynamicData;
};
const handleSpacing = () => {
  const spacing = {};
  let count = 1;
  spacing[`col_${count++}`] = "";
  // for (let i = 0; i <= 10 + spaceManage; i++) {
  //   spacing[`col_${count++}`] = "";
  // }

  dynamicData.space = spacing;
  return dynamicData;
};
const handleOpeningTable = () => {
  const openingTableTitle = [
    "Spreadsheet:",
    "Document Number:",
    "Client:",
    "Project Name:",
    "Project Number:",
    "Building:",
    "Date:",
    "P&ID:",
    "Building Drawing:",
  ];
  const openingTableValue = [
    `${fe_report.title}`,
    "",
    `${fe_report.client_name}`,
    `${fe_report.project_name}`,
    `${fe_report.project_number}`,
    `${fe_report.building_name}`,
    `${fe_report.date_of_report_generation}`,
    "ABC 16332-PID-00-01-14 to 151",
    `${fe_report.building_drawing}`,
  ];
  let data = [];
  openingTableTitle.map((value, index) => {
    let count = 1;
    const openingTable = {};
    for (let i = 0; i < 5; i++) {
      openingTable[`col_${count++}`] = "";
    }
    openingTable[`col_${count++}`] = value;
    openingTable[`col_${count++}`] = "";
    openingTable[`col_${count++}`] = openingTableValue[index];
    // Space
    for (let i = 0; i <= 2 + spaceManage; i++) {
      openingTable[`col_${count++}`] = "";
    }
    // dynamicData[`opening_table_${index}`] = openingTable;
    data.push(openingTable);
  });
  return data;
};

const handleSpreadSheetDescription = () => {
  const spreadSheetDescription = {};
  let count = 1;
  spreadSheetDescription[`col_${count++}`] = "";
  spreadSheetDescription[`col_${count++}`] = "Spreadsheet Description:";
  spreadSheetDescription[`col_${count++}`] = "";
  spreadSheetDescription[
    `col_${count++}`
  ] = `${fe_report.spreadsheet_description}`;
  for (let i = 0; i <= 6 + spaceManage; i++) {
    spreadSheetDescription[`col_${count++}`] = "";
  }
  dynamicData.spreadSheetDescription = spreadSheetDescription;
  return dynamicData;
};

const handleRevision = () => {
  const revisionHeader = {};

  woo = { firstName: "Aditya" };
  dynamicData.revisionHeader = {};
  dynamicData.revisionBody = [];
  let count = 1;
  revisionHeader[`col_${count++}`] = "";
  revisionHeader[`col_${count++}`] = "Rev";
  revisionHeader[`col_${count++}`] = "Description";
  revisionHeader[`col_${count++}`] = "";
  revisionHeader[`col_${count++}`] = "";
  revisionHeader[`col_${count++}`] = "";
  revisionHeader[`col_${count++}`] = "Date";
  revisionHeader[`col_${count++}`] = "By";
  revisionHeader[`col_${count++}`] = "Checked";
  revisionHeader[`col_${count++}`] = "Approved";
  for (let i = 0; i <= spaceManage; i++) {
    revisionHeader[`col_${count++}`] = "";
  }
  fe_report.revisions.forEach((value, index) => {
    count = 1;
    const revisionBody = {};
    revisionBody[`col_${count++}`] = "";
    revisionBody[`col_${count++}`] = value.name;
    revisionBody[`col_${count++}`] = value.description;
    revisionBody[`col_${count++}`] = "";
    revisionBody[`col_${count++}`] = "";
    revisionBody[`col_${count++}`] = "";
    revisionBody[`col_${count++}`] = value.date;
    revisionBody[`col_${count++}`] = value.generated_by;
    revisionBody[`col_${count++}`] = value.checked_by;
    revisionBody[`col_${count++}`] = value.approved_by;
    // for (let i = 0; i <= spaceManage; i++) {
    //   revisionBody[`col_${count++}`] = "";
    // }
    dynamicData.revisionBody.push(revisionBody);
  });
  dynamicData.revisionHeader = revisionHeader;
  return dynamicData;
};
const handleBuildingParameter = () => {
  const buildingParameterTitle = {};
  const buildingParameterHeader = {};
  let count = 1;
  buildingParameterTitle[`col_${count}`] = "";
  buildingParameterHeader[`col_${count++}`] = "";
  buildingParameterTitle[`col_${count}`] = "Building Parameters";
  buildingParameterHeader[`col_${count++}`] = "Description";
  for (let i = 0; i <= 8 + spaceManage; i++) {
    buildingParameterTitle[`col_${count}`] = "";
    buildingParameterHeader[`col_${count++}`] = "";
  }
  const mat = {};
  const len = {};
  const width = {};
  const cavitylen = {};
  const cavityWidth = {};
  const lenVessel = {};
  const radVessel = {};
  const heightToEave = {};
  const heightFromEave_Peak = {};
  const baseArea = {};
  const volFromEave_Peak = {};
  const volEave = {};
  const volVessel = {};
  const totalVol = {};
  const bldVolWithEquipment = {};
  const bldVolWithoutEqupment = {};
  const maxLEL = {};
  const cf = {};

  count = 1;
  mat[`col_${count}`] = "";
  len[`col_${count}`] = "";
  width[`col_${count}`] = "";
  cavitylen[`col_${count}`] = "";
  cavityWidth[`col_${count}`] = "";
  lenVessel[`col_${count}`] = "";
  radVessel[`col_${count}`] = "";
  heightToEave[`col_${count}`] = "";
  heightFromEave_Peak[`col_${count}`] = "";
  baseArea[`col_${count}`] = "";
  volFromEave_Peak[`col_${count}`] = "";
  volEave[`col_${count}`] = "";
  volVessel[`col_${count}`] = "";
  totalVol[`col_${count}`] = "";
  bldVolWithEquipment[`col_${count}`] = "";
  bldVolWithoutEqupment[`col_${count}`] = "";
  maxLEL[`col_${count}`] = "";
  cf[`col_${count++}`] = "";

  mat[`col_${count}`] = "Maximum Ambient Temperature";
  len[`col_${count}`] = "Length";
  width[`col_${count}`] = "Width";
  cavitylen[`col_${count}`] = "Cavity Length";
  cavityWidth[`col_${count}`] = "Cavity Width";
  lenVessel[`col_${count}`] = "Length of Vessel";
  radVessel[`col_${count}`] = "Radius of Vessel";
  heightToEave[`col_${count}`] = "Height to Eave";
  heightFromEave_Peak[`col_${count}`] = "Height from Eave to Peak";
  baseArea[`col_${count}`] = "Base Area";
  volFromEave_Peak[`col_${count}`] = "Volume from Eave to Peak";
  volEave[`col_${count}`] = "Volume up to Eave";
  volVessel[`col_${count}`] = "Volume of Vessel";
  totalVol[`col_${count}`] = "Total Volume";
  bldVolWithEquipment[`col_${count}`] = "Bldg volume that contains equipment";
  bldVolWithoutEqupment[`col_${count}`] = "Building Volume Without Equipment";
  maxLEL[`col_${count}`] = "Max % of Lower Explosive Limit (LEL)";
  cf[`col_${count++}`] = "Contingency Factor (CF)";

  // Spacing
  for (let i = 0; i < 2; i++) {
    mat[`col_${count}`] = "";
    len[`col_${count}`] = "";
    width[`col_${count}`] = "";
    cavitylen[`col_${count}`] = "";
    cavityWidth[`col_${count}`] = "";
    lenVessel[`col_${count}`] = "";
    radVessel[`col_${count}`] = "";
    heightToEave[`col_${count}`] = "";
    heightFromEave_Peak[`col_${count}`] = "";
    baseArea[`col_${count}`] = "";
    volFromEave_Peak[`col_${count}`] = "";
    volEave[`col_${count}`] = "";
    volVessel[`col_${count}`] = "";
    totalVol[`col_${count}`] = "";
    bldVolWithEquipment[`col_${count}`] = "";
    bldVolWithoutEqupment[`col_${count}`] = "";
    maxLEL[`col_${count}`] = "";
    cf[`col_${count++}`] = "";
  }

  mat[`col_${count}`] =
    fe_report.building_parameters["Maximum Ambient Temperature"].C;
  len[`col_${count}`] = fe_report.building_parameters["Length(m)"];
  width[`col_${count}`] = fe_report.building_parameters["Width(m)"];
  cavitylen[`col_${count}`] = fe_report.building_parameters["Cavity Length(m)"];
  cavityWidth[`col_${count}`] =
    fe_report.building_parameters["Cavity Width(m)"];
  lenVessel[`col_${count}`] =
    fe_report.building_parameters["Length of Vessel(m)"];
  radVessel[`col_${count}`] =
    fe_report.building_parameters["Radius of Vessel(m)"];
  heightToEave[`col_${count}`] =
    fe_report.building_parameters["Height to Eave(m)"];
  heightFromEave_Peak[`col_${count}`] =
    fe_report.building_parameters["Height from Eave to Peak(m)"];
  baseArea[`col_${count}`] = fe_report.building_parameters["Base Area(m2)"];
  volFromEave_Peak[`col_${count}`] =
    fe_report.building_parameters["Volume from Eave to Peak(m3)"];
  volEave[`col_${count}`] =
    fe_report.building_parameters["Volume up to Eave(m3)"];
  volVessel[`col_${count}`] =
    fe_report.building_parameters["Volume of Vessel(m3)"];
  totalVol[`col_${count}`] = fe_report.building_parameters["Total Volume(m3)"];
  bldVolWithEquipment[`col_${count}`] =
    fe_report.building_parameters["Bldg volume that contains equipment(%)"];
  bldVolWithoutEqupment[`col_${count}`] =
    fe_report.building_parameters["Building Volume Without Equipment(cu-m)"];
  maxLEL[`col_${count}`] =
    fe_report.building_parameters["Max % of Lower Explosive Limit (LEL)"];
  cf[`col_${count++}`] =
    fe_report.building_parameters["Contingency Factor (CF) %"];

  mat[`col_${count}`] = "C";
  len[`col_${count}`] = "m";
  width[`col_${count}`] = "m";
  cavitylen[`col_${count}`] = "m";
  cavityWidth[`col_${count}`] = "m";
  lenVessel[`col_${count}`] = "m";
  radVessel[`col_${count}`] = "m";
  heightToEave[`col_${count}`] = "m";
  heightFromEave_Peak[`col_${count}`] = "m";
  baseArea[`col_${count}`] = "m2";
  volFromEave_Peak[`col_${count}`] = "m3";
  volEave[`col_${count}`] = "m3";
  volVessel[`col_${count}`] = "m3";
  totalVol[`col_${count}`] = "m3";
  bldVolWithEquipment[`col_${count}`] = "%";
  bldVolWithoutEqupment[`col_${count}`] = "cu-m";
  maxLEL[`col_${count}`] = "%";
  cf[`col_${count++}`] = "%";

  for (let i = 0; i <= 4 + spaceManage; i++) {
    len[`col_${count}`] = "";
    width[`col_${count}`] = "";
    cavitylen[`col_${count}`] = "";
    cavityWidth[`col_${count}`] = "";
    lenVessel[`col_${count}`] = "";
    radVessel[`col_${count}`] = "";
    heightToEave[`col_${count}`] = "";
    heightFromEave_Peak[`col_${count}`] = "";
    baseArea[`col_${count}`] = "";
    volFromEave_Peak[`col_${count}`] = "";
    volEave[`col_${count}`] = "";
    volVessel[`col_${count}`] = "";
    totalVol[`col_${count}`] = "";
    bldVolWithEquipment[`col_${count}`] = "";
    maxLEL[`col_${count}`] = "";
    cf[`col_${count++}`] = "";
  }
  count = 7;
  mat[`col_${count}`] =
    fe_report.building_parameters["Maximum Ambient Temperature"].F;
  bldVolWithoutEqupment[`col_${count++}`] =
    fe_report.building_parameters["Building Volume Without Equipment(cu-ft)"];
  mat[`col_${count}`] = "F";
  bldVolWithoutEqupment[`col_${count++}`] = "cu-ft";
  mat[`col_${count}`] =
    fe_report.building_parameters["Maximum Ambient Temperature"].R;
  bldVolWithoutEqupment[`col_${count++}`] = "";
  mat[`col_${count}`] = "R";
  bldVolWithoutEqupment[`col_${count++}`] = "";
  for (let i = 0; i <= spaceManage; i++) {
    mat[`col_${count}`] = "";
    bldVolWithoutEqupment[`col_${count++}`] = "";
  }

  dynamicData.title = buildingParameterTitle;
  dynamicData.header = buildingParameterHeader;
  dynamicData.mat = mat;
  dynamicData.len = len;
  dynamicData.width = width;
  dynamicData.cavitylen = cavitylen;
  dynamicData.cavityWidth = cavityWidth;
  dynamicData.lenVessel = lenVessel;
  dynamicData.radVessel = radVessel;
  dynamicData.heightToEave = heightToEave;
  dynamicData.heightFromEave_Peak = heightFromEave_Peak;
  dynamicData.baseArea = baseArea;
  dynamicData.volFromEave_Peak = volFromEave_Peak;
  dynamicData.volEave = volEave;
  dynamicData.volVessel = volVessel;
  dynamicData.totalVol = totalVol;
  dynamicData.bldVolWithEquipment = bldVolWithEquipment;
  dynamicData.bldVolWithoutEqupment = bldVolWithoutEqupment;
  dynamicData.maxLEL = maxLEL;
  dynamicData.cf = cf;
  return dynamicData;
};

const handleFugitiveEmissionSummary = () => {
  const fugitiveEmissionSummaryTitle = {};
  const fugitiveEmissionSummaryHeader = {};
  const total_per_day = {};
  const total_per_hrs = {};
  const total_wCF_per_day = {};
  const total_wCF_per_hrs = {};
  let count = 1;

  fugitiveEmissionSummaryTitle[`col_${count}`] = "";
  fugitiveEmissionSummaryHeader[`col_${count}`] = "";
  total_per_day[`col_${count}`] = "";
  total_per_hrs[`col_${count}`] = "";
  total_wCF_per_day[`col_${count}`] = "";
  total_wCF_per_hrs[`col_${count++}`] = "";

  fugitiveEmissionSummaryTitle[`col_${count}`] =
    "Fugitive Emissions Calculation Summary";
  fugitiveEmissionSummaryHeader[`col_${count}`] = "Facility Type";
  total_per_day[`col_${count}`] = "";
  total_per_hrs[`col_${count}`] = "";
  total_wCF_per_day[`col_${count}`] = "";
  total_wCF_per_hrs[`col_${count++}`] = "";
  for (let i = 0; i < 2; i++) {
    fugitiveEmissionSummaryTitle[`col_${count}`] = "";
    fugitiveEmissionSummaryHeader[`col_${count}`] = "";
    total_per_day[`col_${count}`] = "";
    total_per_hrs[`col_${count}`] = "";
    total_wCF_per_day[`col_${count}`] = "";
    total_wCF_per_hrs[`col_${count++}`] = "";
  }
  fugitiveEmissionSummaryTitle[`col_${count}`] = "";
  fugitiveEmissionSummaryHeader[`col_${count}`] = "Item";
  total_per_day[`col_${count}`] = "";
  total_per_hrs[`col_${count}`] = "";
  total_wCF_per_day[`col_${count}`] = "";
  total_wCF_per_hrs[`col_${count++}`] = "";

  fugitiveEmissionSummaryTitle[`col_${count}`] = "";
  fugitiveEmissionSummaryHeader[`col_${count}`] = "";
  total_per_day[`col_${count}`] = "";
  total_per_hrs[`col_${count}`] = "";
  total_wCF_per_day[`col_${count}`] = "";
  total_wCF_per_hrs[`col_${count++}`] = "";

  fugitiveEmissionSummaryTitle[`col_${count}`] = "";
  fugitiveEmissionSummaryHeader[`col_${count}`] = "QTY";
  total_per_day[`col_${count}`] = "Total =";
  total_per_hrs[`col_${count}`] = "=";
  total_wCF_per_day[`col_${count}`] = "Total w/CF =";
  total_wCF_per_hrs[`col_${count++}`] = "=";
  

  fugitiveEmissionSummaryTitle[`col_${count}`] = "";
  fugitiveEmissionSummaryHeader[`col_${count}`] = "Prediction Factor (lbs/day)";
  total_per_day[`col_${count}`] = "";
  total_per_hrs[`col_${count}`] = "";
  total_wCF_per_day[`col_${count}`] = "";
  total_wCF_per_hrs[`col_${count++}`] = "";

  fugitiveEmissionSummaryTitle[`col_${count}`] = "";
  fugitiveEmissionSummaryHeader[`col_${count}`] = "";
  total_per_day[`col_${count}`] =
    fe_report.caliculation_summary["sub_total (lbs/day)"];
  total_per_hrs[`col_${count}`] =
    fe_report.caliculation_summary["sub_total (lbs/hr)"];
  total_wCF_per_day[`col_${count}`] =
    fe_report.caliculation_summary["sub_total w/CF (lbs/day)"];
  total_wCF_per_hrs[`col_${count++}`] =
    fe_report.caliculation_summary["sub_total w/CF (lbs/hr)"];

  fugitiveEmissionSummaryTitle[`col_${count}`] = "";
  fugitiveEmissionSummaryHeader[`col_${count}`] = "Total Emissions (lbs/day)";
  total_per_day[`col_${count}`] = "lbs/day";
  total_per_hrs[`col_${count}`] = "lbs/hr";
  total_wCF_per_day[`col_${count}`] = "lbs/day";
  total_wCF_per_hrs[`col_${count++}`] = "lbs/hr";
  for (let i = 0; i <= spaceManage; i++) {
    fugitiveEmissionSummaryTitle[`col_${count}`] = "";
    fugitiveEmissionSummaryHeader[`col_${count}`] = "";
    total_per_day[`col_${count}`] = "";
    total_per_hrs[`col_${count}`] = "";
    total_wCF_per_day[`col_${count}`] = "";
    total_wCF_per_hrs[`col_${count++}`] = "";
  }

  fe_report.caliculation_summary.eq_items.map((value, index) => {
    count = 1;
    const fugitiveEmissionSummaryBody = {};
    fugitiveEmissionSummaryBody[`col_${count++}`] = "";
    fugitiveEmissionSummaryBody[`col_${count++}`] =
      fe_report.caliculation_summary.facility_type;
    fugitiveEmissionSummaryBody[`col_${count++}`] = "";
    fugitiveEmissionSummaryBody[`col_${count++}`] = "";
    fugitiveEmissionSummaryBody[`col_${count++}`] = value.name;
    fugitiveEmissionSummaryBody[`col_${count++}`] = "";
    fugitiveEmissionSummaryBody[`col_${count++}`] = value.quantity;
    fugitiveEmissionSummaryBody[`col_${count++}`] =
      value["Prediction Factor (lbs/day)"];
    fugitiveEmissionSummaryBody[`col_${count++}`] = "";
    fugitiveEmissionSummaryBody[`col_${count++}`] =
      value["Total Emissions (lbs/day)"];
    for (let i = 0; i <= spaceManage; i++) {
      fugitiveEmissionSummaryBody[`col_${count++}`] = "";
    }
    dynamicData[`body_${index}`] = fugitiveEmissionSummaryBody;
  });
  dynamicData.title = fugitiveEmissionSummaryTitle;
  dynamicData.header = fugitiveEmissionSummaryHeader;
  dynamicData.total_per_day = total_per_day;
  dynamicData.total_per_hrs = total_per_hrs;
  dynamicData.total_wCF_per_day = total_wCF_per_day;
  dynamicData.total_wCF_per_hrs = total_wCF_per_hrs;
  return dynamicData;
};

const handleAdequateVentilationRateCalculation = () => {
  const title = {};
  const hydrocarbon = {};
  const avgMWt = {};
  const substance = {};
  const lowerFlamableLimit = {};
  const mWt = {};
  let count = 1;

  title[`col_${count}`] = "";
  hydrocarbon[`col_${count}`] = "";
  avgMWt[`col_${count}`] = "";
  substance[`col_${count}`] = "";
  lowerFlamableLimit[`col_${count}`] = "";
  mWt[`col_${count++}`] = "";

  title[`col_${count}`] = "Adequate Ventilation Rate Calculation";
  hydrocarbon[`col_${count}`] = "Hydrocarbon";
  avgMWt[`col_${count}`] = "Average Molecular Weight";
  substance[`col_${count}`] = "Substance";
  lowerFlamableLimit[`col_${count}`] = "Lower Flammable Limit";
  mWt[`col_${count++}`] = "Molecular Weight (g/mol)";

  for (let i = 0; i < 2; i++) {
    title[`col_${count}`] = "";
    hydrocarbon[`col_${count}`] = "";
    avgMWt[`col_${count}`] = "";
    substance[`col_${count}`] = "";
    lowerFlamableLimit[`col_${count}`] = "";
    mWt[`col_${count++}`] = "";
  }
  count = 5;
  fe_report.adequate_ventilation_rate__calculations.hydro_carbons.map(
    (value) => {
      title[`col_${count}`] = "";
      hydrocarbon[`col_${count}`] = value.Hydrocarbon;
      avgMWt[`col_${count++}`] = value["Average Molecular Weight"];
    }
  );
  let spaceRemains =
    6 - fe_report.adequate_ventilation_rate__calculations.hydro_carbons.length;
  for (let i = 0; i <= spaceManage + spaceRemains; i++) {
    title[`col_${count}`] = "";
    hydrocarbon[`col_${count}`] = "";
    avgMWt[`col_${count++}`] = "";
  }
  count = 5;
  fe_report.adequate_ventilation_rate__calculations.values_of_substances.map(
    (value) => {
      substance[`col_${count}`] = value.substance;
      lowerFlamableLimit[`col_${count}`] = value["Lower Flammable Limit %"];
      mWt[`col_${count++}`] = value["Molecular Weight (g/mol)"];
      substance[`col_${count}`] = "";
      lowerFlamableLimit[`col_${count}`] = "";
      mWt[`col_${count++}`] = "";
    }
  );
  for (let i = 0; i <= spaceManage; i++) {
    substance[`col_${count}`] = "";
    lowerFlamableLimit[`col_${count}`] = "";
    mWt[`col_${count++}`] = "";
  }

  const connection = {};
  const flanges = {};
  const open_endeds = {};
  const pumps = {};
  const valves = {};
  const others = {};
  count = 1;
  connection[`col_${count}`] = "";
  flanges[`col_${count}`] = "";
  open_endeds[`col_${count}`] = "";
  pumps[`col_${count}`] = "";
  valves[`col_${count}`] = "";
  others[`col_${count++}`] = "";

  connection[`col_${count}`] = "Items";
  flanges[`col_${count}`] = "";
  open_endeds[`col_${count}`] = "";
  pumps[`col_${count}`] = "";
  valves[`col_${count}`] = "";
  others[`col_${count++}`] = "";

  connection[`col_${count}`] = "Connection";
  flanges[`col_${count}`] = "Flanges";
  open_endeds[`col_${count}`] = "Open Endeds";
  pumps[`col_${count}`] = "Pumps";
  valves[`col_${count}`] = "Valves";
  others[`col_${count++}`] = "Others";

  connection[`col_${count}`] = "";
  flanges[`col_${count}`] = "";
  open_endeds[`col_${count}`] = "";
  pumps[`col_${count}`] = "";
  valves[`col_${count}`] = "";
  others[`col_${count++}`] = "";

  Object.keys(
    fe_report.adequate_ventilation_rate__calculations.table_of_factions
  ).map((data) => {
    connection[`col_${count}`] =
      fe_report.adequate_ventilation_rate__calculations.table_of_factions[
        `${data}`
      ].connections;
    flanges[`col_${count}`] =
      fe_report.adequate_ventilation_rate__calculations.table_of_factions[
        `${data}`
      ].flanges;
    open_endeds[`col_${count}`] =
      fe_report.adequate_ventilation_rate__calculations.table_of_factions[
        `${data}`
      ]["open-endeds"];
    pumps[`col_${count}`] =
      fe_report.adequate_ventilation_rate__calculations.table_of_factions[
        `${data}`
      ].pumps;
    valves[`col_${count}`] =
      fe_report.adequate_ventilation_rate__calculations.table_of_factions[
        `${data}`
      ].valves;
    others[`col_${count++}`] =
      fe_report.adequate_ventilation_rate__calculations.table_of_factions[
        `${data}`
      ].others;
  });
  spaceRemains =
    6 -
    Object.keys(
      fe_report.adequate_ventilation_rate__calculations.table_of_factions
    ).length;
  for (let i = 0; i <= spaceManage + spaceRemains; i++) {
    connection[`col_${count}`] = "";
    flanges[`col_${count}`] = "";
    open_endeds[`col_${count}`] = "";
    pumps[`col_${count}`] = "";
    valves[`col_${count}`] = "";
    others[`col_${count++}`] = "";
  }
  const hydrocarbon_name = {};

  const decimal_connection = {};
  const decimal_flanges = {};
  const decimal_open_endeds = {};
  const decimal_pumps = {};
  const decimal_valves = {};
  const decimal_others = {};
  count = 1;
  decimal_connection[`col_${count}`] = "";
  decimal_flanges[`col_${count}`] = "";
  decimal_open_endeds[`col_${count}`] = "";
  decimal_pumps[`col_${count}`] = "";
  decimal_valves[`col_${count}`] = "";
  decimal_others[`col_${count++}`] = "";

  decimal_connection[`col_${count}`] = "Items";
  decimal_flanges[`col_${count}`] = "";
  decimal_open_endeds[`col_${count}`] = "";
  decimal_pumps[`col_${count}`] = "";
  decimal_valves[`col_${count}`] = "";
  decimal_others[`col_${count++}`] = "";

  decimal_connection[`col_${count}`] = "Connection";
  decimal_flanges[`col_${count}`] = "Flanges";
  decimal_open_endeds[`col_${count}`] = "Open Endeds";
  decimal_pumps[`col_${count}`] = "Pumps";
  decimal_valves[`col_${count}`] = "Valves";
  decimal_others[`col_${count++}`] = "Others";

  decimal_connection[`col_${count}`] = "";
  decimal_flanges[`col_${count}`] = "";
  decimal_open_endeds[`col_${count}`] = "";
  decimal_pumps[`col_${count}`] = "";
  decimal_valves[`col_${count}`] = "";
  decimal_others[`col_${count++}`] = "";

  Object.keys(
    fe_report.adequate_ventilation_rate__calculations.table_of_decimals
  ).map((data) => {
    decimal_connection[`col_${count}`] =
      fe_report.adequate_ventilation_rate__calculations.table_of_decimals[
        `${data}`
      ].connections;
    decimal_flanges[`col_${count}`] =
      fe_report.adequate_ventilation_rate__calculations.table_of_decimals[
        `${data}`
      ].flanges;
    decimal_open_endeds[`col_${count}`] =
      fe_report.adequate_ventilation_rate__calculations.table_of_decimals[
        `${data}`
      ]["open-endeds"];
    decimal_pumps[`col_${count}`] =
      fe_report.adequate_ventilation_rate__calculations.table_of_decimals[
        `${data}`
      ].pumps;
    decimal_valves[`col_${count}`] =
      fe_report.adequate_ventilation_rate__calculations.table_of_decimals[
        `${data}`
      ].valves;
    decimal_others[`col_${count++}`] =
      fe_report.adequate_ventilation_rate__calculations.table_of_decimals[
        `${data}`
      ].others;
  });
  spaceRemains =
    6 -
    Object.keys(
      fe_report.adequate_ventilation_rate__calculations.table_of_decimals
    ).length;
  for (let i = 0; i <= spaceManage + spaceRemains; i++) {
    decimal_connection[`col_${count}`] = "";
    decimal_flanges[`col_${count}`] = "";
    decimal_open_endeds[`col_${count}`] = "";
    decimal_pumps[`col_${count}`] = "";
    decimal_valves[`col_${count}`] = "";
    decimal_others[`col_${count++}`] = "";
  }
  const emission = {};
  const calMwt = {};
  const combinedLFL = {};
  const correctedVolume = {};
  const totalHydrocarbonLeakageRate = {};
  const freshAirRate = {};
  const minFreshAir = {};
  const minAirChange = {};
  count = 1;

  emission[`col_${count}`] = "";
  calMwt[`col_${count}`] = "";
  combinedLFL[`col_${count}`] = "";
  correctedVolume[`col_${count}`] = "";
  totalHydrocarbonLeakageRate[`col_${count}`] = "";
  freshAirRate[`col_${count}`] = "";
  minFreshAir[`col_${count}`] = "";
  minAirChange[`col_${count++}`] = "";

  emission[`col_${count}`] = "% Emissions";
  calMwt[`col_${count}`] = "Calculated Hydrocarbon Molecular Weight (g/mol)";
  combinedLFL[`col_${count}`] = "Combined LFL of Mixture";
  correctedVolume[`col_${count}`] = "Corrected Volume (V)";
  totalHydrocarbonLeakageRate[`col_${count}`] =
    "Total Hydrocarbon Leak Rate (G)";
  freshAirRate[`col_${count}`] = "Fresh Air Introduction Rate (Qr)";
  minFreshAir[`col_${count}`] = "Min. Fresh Air Introduction Rate (Q)";
  minAirChange[`col_${count++}`] =
    "Min. Air Change Required for Adequate Ventilation";

  for (let i = 0; i < 2; i++) {
    emission[`col_${count}`] = "";
    calMwt[`col_${count}`] = "";
    combinedLFL[`col_${count}`] = "";
    correctedVolume[`col_${count}`] = "";
    totalHydrocarbonLeakageRate[`col_${count}`] = "";
    freshAirRate[`col_${count}`] = "";
    minFreshAir[`col_${count}`] = "";
    minAirChange[`col_${count++}`] = "";
  }

  calMwt[`col_${count}`] =
    fe_report.adequate_ventilation_rate__calculations[
      "Calculated Hydrocarbon Molecular Weight (g/mol)"
    ];
  combinedLFL[`col_${count}`] =
    fe_report.adequate_ventilation_rate__calculations[
      "Combined LFL of Mixture %"
    ];
  correctedVolume[`col_${count}`] =
    fe_report.adequate_ventilation_rate__calculations["Corrected Volume (V)"];
  totalHydrocarbonLeakageRate[`col_${count}`] =
    fe_report.adequate_ventilation_rate__calculations[
      "Total Hydrocarbon Leak Rate (G)"
    ];
  freshAirRate[`col_${count}`] =
    fe_report.adequate_ventilation_rate__calculations[
      "Fresh Air Introduction Rate (Qr)"
    ];
  minFreshAir[`col_${count}`] =
    fe_report.adequate_ventilation_rate__calculations[
      "Min. Fresh Air Introduction Rate (Q)"
    ];
  minAirChange[`col_${count++}`] =
    fe_report.adequate_ventilation_rate__calculations[
      "Min. Air Change Required for Adequate Ventilation"
    ];

  emission[`col_${count}`] = "";
  calMwt[`col_${count}`] = "";
  combinedLFL[`col_${count}`] = "";
  correctedVolume[`col_${count}`] =
    fe_report.adequate_ventilation_rate__calculations[
      "Corrected Volume (V) Measurement Units"
    ];
  totalHydrocarbonLeakageRate[`col_${count}`] =
    fe_report.adequate_ventilation_rate__calculations[
      "Total Hydrocarbon Leak Rate (G) Measurement Units"
    ];
  freshAirRate[`col_${count}`] =
    fe_report.adequate_ventilation_rate__calculations[
      "Fresh Air Introduction Rate (Qr) Measurement Units"
    ];
  minFreshAir[`col_${count}`] =
    fe_report.adequate_ventilation_rate__calculations[
      "Min. Fresh Air Introduction Rate (Q) Measurement Units"
    ];
  minAirChange[`col_${count++}`] =
    fe_report.adequate_ventilation_rate__calculations[
      "Min. Air Change Required for Adequate Ventilation Measurement Units"
    ];
  count = 5;
  Object.keys(
    fe_report.adequate_ventilation_rate__calculations.emission_percentages
  ).map((value) => {
    emission[`col_${count++}`] =
      fe_report.adequate_ventilation_rate__calculations.emission_percentages[
        value
      ];
  });
  for (let i = 0; i <= spaceManage; i++) {
    emission[`col_${count++}`] = "";
  }
  count = 7;

  for (let i = 0; i <= spaceManage; i++) {
    calMwt[`col_${count}`] = "";
    combinedLFL[`col_${count}`] = "";
    correctedVolume[`col_${count}`] = "";
    totalHydrocarbonLeakageRate[`col_${count}`] = "";
    freshAirRate[`col_${count}`] = "";
    minFreshAir[`col_${count}`] = "";
    minAirChange[`col_${count++}`] = "";
  }
  const comment = {};
  count = 1;
  comment[`col_${count++}`] = "";
  comment[`col_${count++}`] =
    "*Others includes: instruments, loading arms, pressure relief valves, stuffing boxes, compressor seals, dump lever arms, vents";
  for (let i = 0; i <= 8 + spaceManage; i++) {
    comment[`col_${count++}`] = "";
  }

  dynamicData.fraction_connection = connection;
  dynamicData.fraction_flanges = flanges;
  dynamicData.fraction_open_endeds = open_endeds;
  dynamicData.fraction_pumps = pumps;
  dynamicData.fraction_valves = valves;
  dynamicData.fraction_others = others;
  dynamicData.decimal_connection = decimal_connection;
  dynamicData.decimal_flanges = decimal_flanges;
  dynamicData.decimal_open_endeds = decimal_open_endeds;
  dynamicData.decimal_pumps = decimal_pumps;
  dynamicData.decimal_valves = decimal_valves;
  dynamicData.decimal_others = decimal_others;

  dynamicData.emission = emission;
  dynamicData.calMwt = calMwt;
  dynamicData.combinedLFL = combinedLFL;
  dynamicData.correctedVolume = correctedVolume;
  dynamicData.totalHydrocarbonLeakageRate = totalHydrocarbonLeakageRate;
  dynamicData.freshAirRate = freshAirRate;
  dynamicData.minFreshAir = minFreshAir;
  dynamicData.emissminAirChangeion = minAirChange;

  dynamicData.title = title;
  dynamicData.hydrocarbon = hydrocarbon;
  dynamicData.avgMWt = avgMWt;
  dynamicData.substance = substance;
  dynamicData.lowerFlamableLimit = lowerFlamableLimit;
  dynamicData.mWt = mWt;

  dynamicData.comment = comment;

  return dynamicData;
};

const handleRefrence = () => {
  const title = {};
  const row_1 = {};
  const row_2 = {};
  let count = 1;

  title[`col_${count}`] = "";
  row_1[`col_${count}`] = "";
  row_2[`col_${count++}`] = "";

  title[`col_${count}`] = "References";
  row_1[`col_${count}`] = "[1]";
  row_2[`col_${count++}`] = "[2]";

  title[`col_${count}`] = "";
  row_1[`col_${count}`] = "API RP-505";
  row_2[`col_${count++}`] = "API PUBL No. 4615";
  for (let i = 0; i <= 7 + spaceManage; i++) {
    title[`col_${count}`] = "";
    row_1[`col_${count}`] = "";
    row_2[`col_${count++}`] = "";
  }
  dynamicData.title = title;
  dynamicData.row_1 = row_1;
  dynamicData.row_2 = row_2;
  return dynamicData;
};

exports.fugitiveEmissionData = [
  handleSpacing().space,
  handleSpacing().space,
  handleSpreadSheetDescription().spreadSheetDescription,
  handleSpacing().space,
  handleRevision().revisionHeader,
  handleSpacing().space,
  handleBuildingParameter().title,
  handleBuildingParameter().header,
  handleBuildingParameter().mat,
  handleBuildingParameter().len,
  handleBuildingParameter().width,
  handleBuildingParameter().cavitylen,
  handleBuildingParameter().cavityWidth,
  handleBuildingParameter().lenVessel,
  handleBuildingParameter().radVessel,
  handleBuildingParameter().heightToEave,
  handleBuildingParameter().heightFromEave_Peak,
  handleBuildingParameter().baseArea,
  handleBuildingParameter().volFromEave_Peak,
  handleBuildingParameter().volEave,
  handleBuildingParameter().volVessel,
  handleBuildingParameter().totalVol,
  handleBuildingParameter().bldVolWithEquipment,
  handleBuildingParameter().bldVolWithoutEqupment,
  handleBuildingParameter().maxLEL,
  handleBuildingParameter().cf,
  handleSpacing().space,
  handleAggregateTtemsForSubstance().header,
  handleAggregateTtemsForSubstance().title,
  handleAggregateTtemsForSubstance().connection,
  handleAggregateTtemsForSubstance().flanges,
  handleAggregateTtemsForSubstance().open_endeds,
  handleAggregateTtemsForSubstance().pumps,
  handleAggregateTtemsForSubstance().valve,
  handleAggregateTtemsForSubstance().others,
  handleSpacing().space,
  handleFugitiveEmissionSummary().title,
  handleFugitiveEmissionSummary().header,
  handleFugitiveEmissionSummary().body_0,
  handleFugitiveEmissionSummary().body_1,
  handleFugitiveEmissionSummary().body_2,
  handleFugitiveEmissionSummary().body_3,
  handleFugitiveEmissionSummary().body_4,
  handleFugitiveEmissionSummary().body_5,
  handleSpacing().space,
  handleFugitiveEmissionSummary().total_per_day,
  handleFugitiveEmissionSummary().total_per_hrs,
  handleFugitiveEmissionSummary().total_wCF_per_day,
  handleFugitiveEmissionSummary().total_wCF_per_hrs,
  handleSpacing().space,
  handleAdequateVentilationRateCalculation().title,
  handleAdequateVentilationRateCalculation().hydrocarbon,
  handleAdequateVentilationRateCalculation().avgMWt,
  handleAdequateVentilationRateCalculation().substance,
  handleAdequateVentilationRateCalculation().lowerFlamableLimit,
  handleAdequateVentilationRateCalculation().mWt,
  handleAdequateVentilationRateCalculation().fraction_connection,
  handleAdequateVentilationRateCalculation().fraction_flanges,
  handleAdequateVentilationRateCalculation().fraction_open_endeds,
  handleAdequateVentilationRateCalculation().fraction_pumps,
  handleAdequateVentilationRateCalculation().fraction_valves,
  handleAdequateVentilationRateCalculation().fraction_others,
  handleSpacing().space,
  handleAdequateVentilationRateCalculation().decimal_connection,
  handleAdequateVentilationRateCalculation().decimal_flanges,
  handleAdequateVentilationRateCalculation().decimal_open_endeds,
  handleAdequateVentilationRateCalculation().decimal_pumps,
  handleAdequateVentilationRateCalculation().decimal_valves,
  handleAdequateVentilationRateCalculation().decimal_others,
  handleAdequateVentilationRateCalculation().emission,
  handleAdequateVentilationRateCalculation().calMwt,
  handleAdequateVentilationRateCalculation().combinedLFL,
  handleAdequateVentilationRateCalculation().correctedVolume,
  handleAdequateVentilationRateCalculation().totalHydrocarbonLeakageRate,
  handleAdequateVentilationRateCalculation().freshAirRate,
  handleAdequateVentilationRateCalculation().minFreshAir,
  handleAdequateVentilationRateCalculation().emissminAirChangeion,
  handleSpacing().space,
  handleAdequateVentilationRateCalculation().comment,
  handleSpacing().space,
  handleRefrence().title,
  handleRefrence().row_1,
  handleRefrence().row_2,
  handleSpacing().space,
];
handleOpeningTable().map((value, index) =>
  this.fugitiveEmissionData.splice(1 + index, 0, { ...value })
);
handleRevision().revisionBody.map((value, index) =>
  this.fugitiveEmissionData.splice(index + 14, 0, { ...value })
);

const dynamicCol = {};
const handleDynamicSpecification = () => {
  let count = 1;
  // Calculate the remaining row if the number per item table in greater than 10
  const countRemaining =
    Object.keys(fe_report.aggregated_items_for_substance).length - 6;
  dynamicCol[`col_${count++}`] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
  };
  dynamicCol[`col_${count++}`] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return { alignment: { horizontal: "left" } };
      }
      if (value === "Spreadsheet Description:") {
        return {
          alignment: {
            wrapText: true,
            vertical: "center",
            horizontal: "center",
          },
          border: {
            top: { style: "thin" },
            right: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
          },
        };
      }
      if (value === "Building Parameters") {
        return {
          fill: { fgColor: { rgb: "C6D9F0" } },
          font: { sz: "14", bold: true },
        };
      }
      if (value === "Description") {
        return {
          font: { sz: "12", bold: true },
        };
      }
      if (value === "Number of Items Per Substance") {
        return {
          fill: { fgColor: { rgb: "C6D9F0" } },
          font: { sz: "14", bold: true },
        };
      }
      if (value === "Fugitive Emissions Calculation Summary") {
        return {
          fill: { fgColor: { rgb: "C6D9F0" } },
          font: { sz: "14", bold: true },
        };
      }
      if (value === "Adequate Ventilation Rate Calculation") {
        return {
          fill: { fgColor: { rgb: "C6D9F0" } },
          font: { sz: "14", bold: true },
        };
      }
      if (value === "Facility Type") {
        return {
          alignment: { horizontal: "center", vertical: "center" },
          border: {
            top: { style: "thin" },
            right: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
          },
          font: { bold: true },
        };
      }
      if (value === facility_type) {
        return {
          alignment: { horizontal: "center", vertical: "center" },
          border: {
            top: { style: "thin" },
            right: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
          },
        };
      }
      if (
        value ===
        "*Others includes: instruments, loading arms, pressure relief valves, stuffing boxes, compressor seals, dump lever arms, vents"
      ) {
        return { font: { italic: true } };
      }
      if (value === "References") {
        return {
          font: { sz: "12", bold: true },
        };
      }
      return {
        border: {
          top: { style: "thin" },
          right: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
        },
        alignment: { wrapText: true },
      };
    },
  };
  dynamicCol[`col_${count++}`] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return {
          alignment: { horizontal: "left" },
        };
      }
      return {
        border: {
          top: { style: "thin" },
          right: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
        },
        alignment: { wrapText: true },
      };
    },
  };
  dynamicCol[`col_${count++}`] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return { alignment: { horizontal: "left" } };
      }
      return {
        border: {
          top: { style: "thin" },
          right: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
        },
        alignment: { wrapText: true, horizontal: "center" },
      };
    },
  };
  dynamicCol[`col_${count++}`] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return {
          alignment: { horizontal: "left" },
        };
      }
      if (value === "Item") {
        return {
          alignment: { horizontal: "center", vertical: "center" },
          border: {
            top: { style: "thin" },
            right: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
          },
          font: { bold: true },
        };
      }
      if (value === "H2S") {
        return {
          font: { bold: true },
          border: {
            top: { style: "thin" },
            right: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
          },
        };
      }
      return {
        border: {
          top: { style: "thin" },
          right: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
        },
        alignment: { wrapText: true },
      };
    },
  };
  dynamicCol[`col_${count++}`] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return {
          alignment: { horizontal: "left" },
        };
      }
      if (value === "Sour Gas Dehy. Skid (BU-406)") {
        return {
          fill: { fgColor: { rgb: "C6D9F0" } },
        };
      }
      return {
        border: {
          top: { style: "thin" },
          right: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
        },
        alignment: { wrapText: true },
      };
    },
  };
  dynamicCol[`col_${count++}`] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return {
          alignment: { horizontal: "left" },
        };
      }
      if (value === "QTY") {
        return {
          alignment: { horizontal: "center", vertical: "center" },
          border: {
            top: { style: "thin" },
            right: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
          },
          font: { bold: true },
        };
      }
      if (value === "Total =") {
        return {
          alignment: { horizontal: "right" },
          border: {
            top: { style: "thin" },
            right: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
          },
        };
      }
      if (value === "=") {
        return {
          alignment: { horizontal: "right" },
          border: {
            top: { style: "thin" },
            right: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
          },
        };
      }
      if (value === "Total w/CF =") {
        return {
          alignment: { horizontal: "right" },
          border: {
            top: { style: "thin" },
            right: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
          },
        };
      }
      if (value === ">=C5") {
        return {
          font: { bold: true },
          border: {
            top: { style: "thin" },
            right: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
          },
        };
      }
      return {
        border: {
          top: { style: "thin" },
          right: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
        },
        alignment: { wrapText: true },
      };
    },
  };
  dynamicCol[`col_${count++}`] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return {
          alignment: { horizontal: "left" },
        };
      }
      if (value === "Prediction Factor (lbs/day)") {
        return {
          alignment: { horizontal: "center", vertical: "center" },
          border: {
            top: { style: "thin" },
            right: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
          },
          font: { bold: true },
        };
      }
      return {
        border: {
          top: { style: "thin" },
          right: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
        },
        alignment: { wrapText: true },
      };
    },
  };
  dynamicCol[`col_${count++}`] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return {
          alignment: { horizontal: "left" },
        };
      }
      if (value === "87% C1") {
        return {
          font: { bold: true },
          border: {
            top: { style: "thin" },
            right: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
          },
        };
      }
      return {
        border: {
          top: { style: "thin" },
          right: { style: "thin" },
          bottom: { style: "thin" },
          left: { style: "thin" },
        },
        alignment: { wrapText: true },
      };
    },
  };
  dynamicCol[`col_${count++}`] = {
    displayName: "",
    headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
    cellStyle: (value, row) => {
      if (value === "") {
        return { alignment: { horizontal: "right" } };
      }
      if (value === "Total Emissions (lbs/day)") {
        return {
          alignment: {
            horizontal: "center",
            vertical: "center",
            wrapText: true,
          },
          border: {
            top: { style: "thin" },
            right: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
          },
          font: { bold: true },
        };
      }
      if (typeof value === "string") {
        return {
          border: {
            top: { style: "thin" },
            right: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
          },
          alignment: { wrapText: true },
        };
      }
      if (typeof value === "number") {
        return {
          border: {
            top: { style: "thin" },
            right: { style: "thin" },
            bottom: { style: "thin" },
            left: { style: "thin" },
          },
          alignment: { wrapText: true },
        };
      }
    },
  };

  if (countRemaining > 0) {
    for (let i = 0; i < countRemaining; i++) {
      dynamicCol[`col_${count++}`] = {
        displayName: "",
        headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
        cellStyle: (value, row) => {
          if (value === "") {
            return { alignment: { horizontal: "right" } };
          }
          if (typeof value === "string") {
            return {
              border: {
                top: { style: "thin" },
                right: { style: "thin" },
                bottom: { style: "thin" },
                left: { style: "thin" },
              },
              alignment: { wrapText: true },
            };
          }
          if (typeof value === "number") {
            return {
              border: {
                top: { style: "thin" },
                right: { style: "thin" },
                bottom: { style: "thin" },
                left: { style: "thin" },
              },
              alignment: { wrapText: true },
            };
          }
        },
      };
    }
  }
  fe_report.items_per_substance.forEach((value, index) => {
    for (const key in value) {
      if (key !== "pnId") {
        dynamicCol[`col_${count++}`] = {
          displayName: "",
          headerStyle: { font: { color: { rgb: "FFFFFFFF" } } },
          cellStyle: (value, row) => {
            if (value === "") {
              return { alignment: { horizontal: "right" } };
            }
            if (typeof value === "string") {
              return {
                border: {
                  top: { style: "thin" },
                  right: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                },
                alignment: { wrapText: true },
              };
            }
            if (typeof value === "number") {
              return {
                border: {
                  top: { style: "thin" },
                  right: { style: "thin" },
                  bottom: { style: "thin" },
                  left: { style: "thin" },
                },
                alignment: { wrapText: true },
              };
            }
          },
        };
      }
    }
  });
  return dynamicCol;
};

exports.fugitiveEmissionSpecification = handleDynamicSpecification();
const revLen = fe_report.revisions.length;

const dynamicMerge = [];
const handleDynamicMerge = () => {
  dynamicMerge.push({
    start: { row: 3, column: 6 },
    end: { row: 3, column: 7 },
  });
  dynamicMerge.push({
    start: { row: 4, column: 6 },
    end: { row: 4, column: 7 },
  });
  dynamicMerge.push({
    start: { row: 5, column: 6 },
    end: { row: 5, column: 7 },
  });
  dynamicMerge.push({
    start: { row: 6, column: 6 },
    end: { row: 6, column: 7 },
  });
  dynamicMerge.push({
    start: { row: 7, column: 6 },
    end: { row: 7, column: 7 },
  });
  dynamicMerge.push({
    start: { row: 8, column: 6 },
    end: { row: 8, column: 7 },
  });
  dynamicMerge.push({
    start: { row: 9, column: 6 },
    end: { row: 9, column: 7 },
  });
  dynamicMerge.push({
    start: { row: 10, column: 6 },
    end: { row: 10, column: 7 },
  });
  dynamicMerge.push({
    start: { row: 11, column: 6 },
    end: { row: 11, column: 7 },
  });
  dynamicMerge.push({
    start: { row: 3, column: 8 },
    end: { row: 3, column: 9 },
  });
  dynamicMerge.push({
    start: { row: 4, column: 8 },
    end: { row: 4, column: 9 },
  });
  dynamicMerge.push({
    start: { row: 5, column: 8 },
    end: { row: 5, column: 9 },
  });
  dynamicMerge.push({
    start: { row: 6, column: 8 },
    end: { row: 6, column: 9 },
  });
  dynamicMerge.push({
    start: { row: 7, column: 8 },
    end: { row: 7, column: 9 },
  });
  dynamicMerge.push({
    start: { row: 8, column: 8 },
    end: { row: 8, column: 9 },
  });
  dynamicMerge.push({
    start: { row: 9, column: 8 },
    end: { row: 9, column: 9 },
  });
  dynamicMerge.push({
    start: { row: 10, column: 8 },
    end: { row: 10, column: 9 },
  });
  dynamicMerge.push({
    start: { row: 11, column: 8 },
    end: { row: 11, column: 9 },
  });
  dynamicMerge.push({
    start: { row: 13, column: 2 },
    end: { row: 13, column: 3 },
  });
  dynamicMerge.push({
    start: { row: 13, column: 4 },
    end: { row: 13, column: 10 },
  });
  dynamicMerge.push({
    start: { row: 15, column: 3 },
    end: { row: 15, column: 6 },
  });
  for (let i = 0; i < revLen; i++) {
    dynamicMerge.push({
      start: { row: 16 + i, column: 3 },
      end: { row: 16 + i, column: 6 },
    });
  }
  return dynamicMerge;
};
exports.fugitiveEmissionMerges = [
  { start: { row: 3, column: 6 }, end: { row: 3, column: 7 } },
  { start: { row: 4, column: 6 }, end: { row: 4, column: 7 } },
  { start: { row: 5, column: 6 }, end: { row: 5, column: 7 } },
  { start: { row: 6, column: 6 }, end: { row: 6, column: 7 } },
  { start: { row: 7, column: 6 }, end: { row: 7, column: 7 } },
  { start: { row: 8, column: 6 }, end: { row: 8, column: 7 } },
  { start: { row: 9, column: 6 }, end: { row: 9, column: 7 } },
  { start: { row: 10, column: 6 }, end: { row: 10, column: 7 } },
  { start: { row: 11, column: 6 }, end: { row: 11, column: 7 } },
  { start: { row: 3, column: 8 }, end: { row: 3, column: 9 } },
  { start: { row: 4, column: 8 }, end: { row: 4, column: 9 } },
  { start: { row: 5, column: 8 }, end: { row: 5, column: 9 } },
  { start: { row: 6, column: 8 }, end: { row: 6, column: 9 } },
  { start: { row: 7, column: 8 }, end: { row: 7, column: 9 } },
  { start: { row: 8, column: 8 }, end: { row: 8, column: 9 } },
  { start: { row: 9, column: 8 }, end: { row: 9, column: 9 } },
  { start: { row: 10, column: 8 }, end: { row: 10, column: 9 } },
  { start: { row: 11, column: 8 }, end: { row: 11, column: 9 } },
  { start: { row: 13, column: 2 }, end: { row: 13, column: 3 } },
  { start: { row: 13, column: 4 }, end: { row: 13, column: 10 } },
  { start: { row: 16, column: 3 }, end: { row: 16, column: 6 } },
  { start: { row: 17, column: 3 }, end: { row: 17, column: 6 } },
  { start: { row: 18, column: 3 }, end: { row: 18, column: 6 } },
  { start: { row: 19, column: 3 }, end: { row: 19, column: 6 } },
  { start: { row: 21, column: 2 }, end: { row: 21, column: 10 } },
  { start: { row: 22, column: 2 }, end: { row: 22, column: 4 } },
  { start: { row: 23, column: 2 }, end: { row: 23, column: 4 } },
  { start: { row: 24, column: 2 }, end: { row: 24, column: 4 } },
  { start: { row: 25, column: 2 }, end: { row: 25, column: 4 } },
  { start: { row: 26, column: 2 }, end: { row: 26, column: 4 } },
  { start: { row: 27, column: 2 }, end: { row: 27, column: 4 } },
  { start: { row: 28, column: 2 }, end: { row: 28, column: 4 } },
  { start: { row: 29, column: 2 }, end: { row: 29, column: 4 } },
  { start: { row: 30, column: 2 }, end: { row: 30, column: 4 } },
  { start: { row: 31, column: 2 }, end: { row: 31, column: 4 } },
  { start: { row: 32, column: 2 }, end: { row: 32, column: 4 } },
  { start: { row: 33, column: 2 }, end: { row: 33, column: 4 } },
  { start: { row: 34, column: 2 }, end: { row: 34, column: 4 } },
  { start: { row: 35, column: 2 }, end: { row: 35, column: 4 } },
  { start: { row: 36, column: 2 }, end: { row: 36, column: 4 } },
  { start: { row: 37, column: 2 }, end: { row: 37, column: 4 } },
  { start: { row: 38, column: 2 }, end: { row: 38, column: 4 } },
  { start: { row: 39, column: 2 }, end: { row: 39, column: 4 } },
  { start: { row: 40, column: 2 }, end: { row: 40, column: 4 } },
  { start: { row: 42, column: 2 }, end: { row: 42, column: 10 } },
  { start: { row: 43, column: 2 }, end: { row: 43, column: 4 } },
  { start: { row: 44, column: 2 }, end: { row: 44, column: 4 } },
  { start: { row: 45, column: 2 }, end: { row: 45, column: 4 } },
  { start: { row: 46, column: 2 }, end: { row: 46, column: 4 } },
  { start: { row: 47, column: 2 }, end: { row: 47, column: 4 } },
  { start: { row: 48, column: 2 }, end: { row: 48, column: 4 } },
  { start: { row: 49, column: 2 }, end: { row: 49, column: 4 } },
  { start: { row: 51, column: 2 }, end: { row: 51, column: 10 } },
  { start: { row: 52, column: 2 }, end: { row: 52, column: 4 } },
  { start: { row: 52, column: 5 }, end: { row: 52, column: 6 } },
  { start: { row: 53, column: 5 }, end: { row: 53, column: 6 } },
  { start: { row: 54, column: 5 }, end: { row: 54, column: 6 } },
  { start: { row: 55, column: 5 }, end: { row: 55, column: 6 } },
  { start: { row: 56, column: 5 }, end: { row: 56, column: 6 } },
  { start: { row: 57, column: 5 }, end: { row: 57, column: 6 } },
  { start: { row: 58, column: 5 }, end: { row: 58, column: 6 } },
  { start: { row: 60, column: 7 }, end: { row: 60, column: 8 } },
  { start: { row: 61, column: 7 }, end: { row: 61, column: 8 } },
  { start: { row: 62, column: 7 }, end: { row: 62, column: 8 } },
  { start: { row: 63, column: 7 }, end: { row: 63, column: 8 } },
  { start: { row: 64, column: 7 }, end: { row: 64, column: 8 } },
  { start: { row: 52, column: 8 }, end: { row: 52, column: 9 } },
  { start: { row: 53, column: 8 }, end: { row: 53, column: 9 } },
  { start: { row: 54, column: 8 }, end: { row: 54, column: 9 } },
  { start: { row: 55, column: 8 }, end: { row: 55, column: 9 } },
  { start: { row: 56, column: 8 }, end: { row: 56, column: 9 } },
  { start: { row: 57, column: 8 }, end: { row: 57, column: 9 } },
  { start: { row: 58, column: 8 }, end: { row: 58, column: 9 } },
  { start: { row: 53, column: 2 }, end: { row: 58, column: 4 } },
  { start: { row: 65, column: 2 }, end: { row: 65, column: 5 } },
  { start: { row: 65, column: 6 }, end: { row: 65, column: 10 } },
  { start: { row: 66, column: 2 }, end: { row: 66, column: 4 } },
  { start: { row: 67, column: 2 }, end: { row: 67, column: 4 } },
  { start: { row: 68, column: 2 }, end: { row: 68, column: 4 } },
  { start: { row: 68, column: 5 }, end: { row: 68, column: 6 } },
  { start: { row: 69, column: 5 }, end: { row: 69, column: 6 } },
  { start: { row: 70, column: 5 }, end: { row: 70, column: 6 } },
  { start: { row: 68, column: 7 }, end: { row: 68, column: 8 } },
  { start: { row: 69, column: 7 }, end: { row: 69, column: 8 } },
  { start: { row: 70, column: 7 }, end: { row: 70, column: 8 } },
  { start: { row: 68, column: 9 }, end: { row: 68, column: 10 } },
  { start: { row: 69, column: 9 }, end: { row: 69, column: 10 } },
  { start: { row: 70, column: 9 }, end: { row: 70, column: 10 } },
  { start: { row: 69, column: 2 }, end: { row: 69, column: 4 } },
  { start: { row: 70, column: 2 }, end: { row: 70, column: 4 } },
  { start: { row: 71, column: 3 }, end: { row: 71, column: 4 } },
  { start: { row: 72, column: 3 }, end: { row: 72, column: 4 } },
  { start: { row: 73, column: 3 }, end: { row: 73, column: 4 } },
  { start: { row: 74, column: 3 }, end: { row: 74, column: 4 } },
  { start: { row: 75, column: 3 }, end: { row: 75, column: 4 } },
  { start: { row: 76, column: 3 }, end: { row: 76, column: 4 } },
  { start: { row: 77, column: 2 }, end: { row: 77, column: 4 } },
  { start: { row: 78, column: 3 }, end: { row: 78, column: 4 } },
  { start: { row: 79, column: 3 }, end: { row: 79, column: 4 } },
  { start: { row: 80, column: 3 }, end: { row: 80, column: 4 } },
  { start: { row: 81, column: 3 }, end: { row: 81, column: 4 } },
  { start: { row: 82, column: 3 }, end: { row: 82, column: 4 } },
  { start: { row: 83, column: 3 }, end: { row: 83, column: 4 } },
  { start: { row: 84, column: 2 }, end: { row: 84, column: 4 } },
  { start: { row: 85, column: 2 }, end: { row: 85, column: 4 } },
  { start: { row: 86, column: 2 }, end: { row: 86, column: 4 } },
  { start: { row: 87, column: 2 }, end: { row: 87, column: 4 } },
  { start: { row: 88, column: 2 }, end: { row: 88, column: 4 } },
  { start: { row: 89, column: 2 }, end: { row: 89, column: 4 } },
  { start: { row: 90, column: 2 }, end: { row: 90, column: 4 } },
  { start: { row: 91, column: 2 }, end: { row: 91, column: 4 } },
  { start: { row: 93, column: 2 }, end: { row: 93, column: 10 } },
  { start: { row: 96, column: 3 }, end: { row: 96, column: 10 } },
  { start: { row: 97, column: 3 }, end: { row: 97, column: 10 } },
];
