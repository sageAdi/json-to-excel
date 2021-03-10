const xl = require("excel4node");
const { fe_report } = require("./input");
const { methodologyData } = require("./methodology");
const {
  fugitiveEmissionData,
  handleOpeningTable,
} = require("./fugitiveEmision");
const wb = new xl.Workbook();
const ws1 = wb.addWorksheet("Methodology", {
  pageSetup: {
    fitToWidth: 1,
  },
});
const options = {
  sheetView: {
    showGridLines: false,
  },
};
const ws2 = wb.addWorksheet("Fugitive Emission", options);
const ws3 = wb.addWorksheet("Natural Ventilation");
const ws4 = wb.addWorksheet("API RP-505 Figure 1");
const ws5 = wb.addWorksheet("Calculation Sheet Revisions");

const style = wb.createStyle({
  font: {
    color: "#000000",
    size: 10,
  },
  alignment: {
    wrapText: true,
    vertical: "top",
  },
});
const italics = wb.createStyle({
  font: {
    color: "#000000",
    size: 10,
    italics: true,
  },
  alignment: {
    wrapText: true,
    vertical: "top",
  },
  border: {
    left: {
      style: "none",
    },
    right: {
      style: "none",
    },
    top: {
      style: "none",
    },
    bottom: {
      style: "none",
    },
  },
});
const alignMiddle = wb.createStyle({
  font: {
    color: "#000000",
    size: 10,
  },
  alignment: {
    wrapText: true,
    vertical: "center",
    horizontal: "center",
  },
});
const horizontalMiddle = wb.createStyle({
  font: {
    color: "#000000",
    size: 10,
  },
  alignment: {
    wrapText: true,
    vertical: "center",
    horizontal: "center",
  },
});
const heading = wb.createStyle({
  font: {
    color: "#000000",
    size: 12,
    bold: true,
  },
  alignment: {
    wrapText: true,
    horizontal: "center",
  },
  fill: {
    type: "pattern",
    patternType: "solid",
    bgColor: "#C6D9F0",
  },
});
const border = wb.createStyle({
  font: {
    color: "#000000",
    size: 10,
  },
  alignment: {
    wrapText: true,
  },
  border: {
    left: {
      style: "thin",
      color: "#000000",
    },
    right: {
      style: "thin",
      color: "#000000",
    },
    top: {
      style: "thin",
      color: "#000000",
    },
    bottom: {
      style: "thin",
      color: "#000000",
    },
    outline: false,
  },
});

const generateExcel = () => {
  return new Promise((res, rej) => {
    let rowIndex = 2;
    methodologyData.forEach((data) => {
      let columnIndex = 2;
      Object.keys(data).forEach((col) => {
        const columnWidth = data[col].length / 13.4;
        ws1
          .cell(
            rowIndex,
            columnIndex,
            rowIndex,
            columnIndex + columnWidth,
            true
          )
          .string(data[col])
          .style(style);
        columnIndex = columnIndex + columnWidth;
        columnIndex++;
      });
      rowIndex++;
    });
    rowIndex = 2;
    fugitiveEmissionData.forEach((data) => {
      let columnIndex = 1;
      Object.keys(data).forEach((col) => {
        if (data[col].length > 0) {
          if (typeof data[col] === "string") {
            ws2
              .cell(rowIndex, columnIndex++)
              .string(data[col])
              .style(style)
              .style(border);
          } else if (typeof data[col] === "number") {
            ws2
              .cell(rowIndex, columnIndex++, true)
              .number(data[col])
              .style(style)
              .style(border);
          }
        } else {
          if (typeof data[col] === "string") {
            ws2
              .cell(rowIndex, columnIndex++)
              .string(data[col])
              .style(style);
          } else if (typeof data[col] === "number") {
            ws2
              .cell(rowIndex, columnIndex++)
              .number(data[col])
              .style(style)
              .style(border);
          }
        }
      });
      rowIndex++;
    });
    ws2.addImage({
      path: "./logo-social.png",
      type: "picture",
      position: {
        type: "twoCellAnchor",
        from: {
          col: 2,
          colOff: 0,
          row: 4,
          rowOff: 0,
        },
        to: {
          col: 5,
          colOff: 0,
          row: 11,
          rowOff: 0,
        },
      },
    });
    for (let i = 0; i <= 8; i++) {
      ws2.cell(3 + i, 6, 3 + i, 7, true).style(border);
    }
    for (let i = 0; i <= 8; i++) {
      ws2.cell(3 + i, 8, 3 + i, 10, true).style(border);
    }
    ws2.row(13).setHeight(50);
    ws2.cell(13, 2, 13, 3, true).style(alignMiddle).style(border);
    ws2.cell(13, 4, 13, 10, true).style(alignMiddle).style(border);
    ws2.cell(15, 3, 15, 6, true).style(horizontalMiddle).style(border);

    const revLength = fe_report.revisions.length;
    for (let i = 0; i < revLength; i++) {
      ws2
        .cell(16 + i, 3, 16 + i, 6, true)
        .style(horizontalMiddle)
        .style(border);
    }
    ws2
      .cell(17 + revLength, 2, 17 + revLength, 10, true)
      .style(border)
      .style(heading);
    for (let i = 0; i <= 18; i++) {
      ws2
        .cell(18 + revLength + i, 2, 18 + revLength + i, 4, true)
        .style(border);
    }
    ws2.cell(19 + revLength, 3, 36 + revLength, 10).style(border);

    ws2
      .cell(38 + revLength, 2, 38 + revLength, 10, true)
      .style(border)
      .style(heading);

    const items_per_substanceLenght = fe_report.items_per_substance.length;
    const aggregated_items_for_substanceLength = Object.keys(
      fe_report.aggregated_items_for_substance
    ).length;
    let column = 0;
    for (let i = 0; i < items_per_substanceLenght; i++) {
      i === 0
        ? (column = 6 + aggregated_items_for_substanceLength)
        : (column = column + fe_report.items_per_substance[i]);
      ws2
        .cell(38 + revLength, column, 38 + revLength, column + 2, true)
        .style(border);
    }

    for (let i = 0; i <= 6; i++) {
      ws2
        .cell(39 + revLength + i, 2, 39 + revLength + i, 4, true)
        .style(border);
    }

    ws2
      .cell(47 + revLength, 2, 47 + revLength, 10, true)
      .style(border)
      .style(heading);
    ws2.cell(48 + revLength, 2, 48 + revLength, 4, true).style(border);
    ws2.cell(49 + revLength, 2, 54 + revLength, 4, true).style(border);

    for (let i = 0; i <= 6; i++) {
      ws2
        .cell(48 + revLength + i, 5, 48 + revLength + i, 6, true)
        .style(border);
    }
    for (let i = 0; i <= 6; i++) {
      ws2
        .cell(48 + revLength + i, 8, 48 + revLength + i, 9, true)
        .style(alignMiddle)
        .style(border);
    }
    for (let i = 0; i <= 3; i++) {
      ws2
        .cell(56 + revLength + i, 7, 56 + revLength + i, 8, true)
        .style(border);
    }

    ws2
      .cell(61 + revLength, 2, 61 + revLength, 10, true)
      .style(border)
      .style(heading);
    for (let i = 0; i <= 4; i++) {
      ws2
        .cell(62 + revLength + i, 2, 62 + revLength + i, 4, true)
        .style(border);
    }
    for (let i = 0; i <= 3; i++) {
      ws2
        .cell(64 + revLength + i, 5, 64 + revLength + i, 6, true)
        .style(border);
    }
    for (let i = 0; i <= 3; i++) {
      ws2
        .cell(64 + revLength + i, 7, 64 + revLength + i, 8, true)
        .style(border);
    }
    for (let i = 0; i <= 3; i++) {
      ws2
        .cell(64 + revLength + i, 9, 64 + revLength + i, 10, true)
        .style(border);
    }
    for (let i = 0; i <= 5; i++) {
      ws2
        .cell(67 + revLength + i, 3, 67 + revLength + i, 4, true)
        .style(border);
    }
    for (let i = 0; i <= 5; i++) {
      ws2
        .cell(74 + revLength + i, 3, 74 + revLength + i, 4, true)
        .style(border);
    }
    for (let i = 0; i <= 7; i++) {
      ws2
        .cell(80 + revLength + i, 2, 80 + revLength + i, 4, true)
        .style(border);
    }
    ws2.cell(89 + revLength, 2, 89 + revLength, 10, true).style(italics);
    ws2
      .cell(91 + revLength, 2, 91 + revLength, 10, true)
      .style(border)
      .style(heading);

    ws2.cell(92 + revLength, 3, 92 + revLength, 10, true).style(border);
    ws2.cell(93 + revLength, 3, 93 + revLength, 10, true).style(border);
    res(wb);
  });
};
module.exports = { generateExcel };
