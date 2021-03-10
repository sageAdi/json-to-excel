const xl = require("excel4node");
const { fe_report } = require("./input");
const { methodologyData } = require("./methodology");
const {
  fugitiveEmissionData,
  handleOpeningTable,
} = require("./fugitiveEmision");
const wb = new xl.Workbook();
const options = {
  sheetView: {
    showGridLines: false,
  },
};
const methodology = wb.addWorksheet("Methodology", options);
const fugitiveEmission = wb.addWorksheet("Fugitive Emission", options);
const naturalVentilation = wb.addWorksheet("Natural Ventilation");
const apiRP = wb.addWorksheet("API RP-505 Figure 1");
const calSheetRevisions = wb.addWorksheet("Calculation Sheet Revisions");

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
const largeText = wb.createStyle({
  font: {
    color: "#000000",
    size: 12,
    bold: true,
  },
  alignment: {
    wrapText: true,
  },
});
const underline = wb.createStyle({
  font: {
    color: "#000000",
    size: 10,
    underline: true,
  },
});
const boldText = wb.createStyle({
  font: {
    color: "#000000",
    size: 10,
    bold: true,
  },
  alignment: {
    wrapText: true,
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
    let rowIndex = 1;
    methodologyData.forEach((data) => {
      let columnIndex = 1;
      Object.keys(data).forEach((col) => {
        const columnWidth = data[col].length / 13.4;
        methodology
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
            fugitiveEmission
              .cell(rowIndex, columnIndex++)
              .string(data[col])
              .style(style)
              .style(border);
          } else if (typeof data[col] === "number") {
            fugitiveEmission
              .cell(rowIndex, columnIndex++, true)
              .number(data[col])
              .style(style)
              .style(border);
          }
        } else {
          if (typeof data[col] === "string") {
            fugitiveEmission
              .cell(rowIndex, columnIndex++)
              .string(data[col])
              .style(style);
          } else if (typeof data[col] === "number") {
            fugitiveEmission
              .cell(rowIndex, columnIndex++)
              .number(data[col])
              .style(style)
              .style(border);
          }
        }
      });
      rowIndex++;
    });
    // Styling of Methodology Sheet
    methodology.column(2).setWidth(20);
    methodology.column(1).setWidth(15);
    methodology.cell(1, 1, 1, 8).style(largeText);
    methodology.cell(7, 1, 7, 3).style(boldText);
    methodology.cell(8, 1, 8, 3).style(underline);
    methodology.cell(12, 1, 12, 4).style(underline);
    methodology.cell(17, 1, 17, 4).style(underline);
    methodology.cell(21, 1, 21, 4).style(underline);
    methodology.cell(25, 1, 25, 4).style(underline);
    methodology.cell(29, 1, 29, 4).style(largeText);
    methodology.cell(33, 1, 33, 3).style(boldText);
    methodology.cell(34, 1, 34, 3).style(underline);
    methodology
      .cell(35, 2)
      .style(alignMiddle)
      .style({
        border: {
          bottom: {
            style: "thin",
            color: "#000000",
          },
        },
      });
    methodology.cell(36, 2, 35, 3).style(alignMiddle);
    methodology.cell(42, 1, 42, 3).style(underline);
    methodology.cell(55, 1).style(largeText);
    methodology.cell(56, 1,58,4).style(border);

    // Styling of Fugitive Emission Sheet
    fugitiveEmission.addImage({
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
      fugitiveEmission.cell(3 + i, 6, 3 + i, 7, true).style(border);
    }
    for (let i = 0; i <= 8; i++) {
      fugitiveEmission.cell(3 + i, 8, 3 + i, 10, true).style(border);
    }
    fugitiveEmission.row(13).setHeight(50);
    fugitiveEmission.cell(13, 2, 13, 3, true).style(alignMiddle).style(border);
    fugitiveEmission.cell(13, 4, 13, 10, true).style(alignMiddle).style(border);
    fugitiveEmission
      .cell(15, 3, 15, 6, true)
      .style(horizontalMiddle)
      .style(border);

    const revLength = fe_report.revisions.length;
    for (let i = 0; i < revLength; i++) {
      fugitiveEmission
        .cell(16 + i, 3, 16 + i, 6, true)
        .style(horizontalMiddle)
        .style(border);
    }
    fugitiveEmission
      .cell(17 + revLength, 2, 17 + revLength, 10, true)
      .style(border)
      .style(heading);
    for (let i = 0; i <= 18; i++) {
      fugitiveEmission
        .cell(18 + revLength + i, 2, 18 + revLength + i, 4, true)
        .style(border);
    }
    fugitiveEmission.cell(19 + revLength, 3, 36 + revLength, 10).style(border);

    fugitiveEmission
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
        : (column =
            column + Object.keys(fe_report.items_per_substance[i]).length - 1);
      fugitiveEmission
        .cell(38 + revLength, column, 38 + revLength, column + 2, true)
        .style(border);
    }

    for (let i = 0; i <= 6; i++) {
      fugitiveEmission
        .cell(39 + revLength + i, 2, 39 + revLength + i, 4, true)
        .style(border);
    }

    fugitiveEmission
      .cell(47 + revLength, 2, 47 + revLength, 10, true)
      .style(border)
      .style(heading);
    fugitiveEmission
      .cell(48 + revLength, 2, 48 + revLength, 4, true)
      .style(alignMiddle)
      .style(border);
    fugitiveEmission
      .cell(48 + revLength, 7)
      .style(alignMiddle)
      .style(border);
    fugitiveEmission
      .cell(48 + revLength, 10)
      .style(alignMiddle)
      .style(border);
    fugitiveEmission
      .cell(49 + revLength, 2, 54 + revLength, 4, true)
      .style(alignMiddle)
      .style(border);

    for (let i = 0; i <= 6; i++) {
      fugitiveEmission
        .cell(48 + revLength + i, 5, 48 + revLength + i, 6, true)
        .style(alignMiddle)
        .style(border);
    }
    for (let i = 0; i <= 6; i++) {
      fugitiveEmission
        .cell(48 + revLength + i, 8, 48 + revLength + i, 9, true)
        .style(alignMiddle)
        .style(border);
    }
    for (let i = 0; i <= 3; i++) {
      fugitiveEmission
        .cell(56 + revLength + i, 7, 56 + revLength + i, 8, true)
        .style(border);
    }

    fugitiveEmission
      .cell(61 + revLength, 2, 61 + revLength, 10, true)
      .style(border)
      .style(heading);
    for (let i = 0; i <= 4; i++) {
      fugitiveEmission
        .cell(62 + revLength + i, 2, 62 + revLength + i, 4, true)
        .style(border);
    }
    for (let i = 0; i <= 3; i++) {
      fugitiveEmission
        .cell(64 + revLength + i, 5, 64 + revLength + i, 6, true)
        .style(border);
    }
    for (let i = 0; i <= 3; i++) {
      fugitiveEmission
        .cell(64 + revLength + i, 7, 64 + revLength + i, 8, true)
        .style(border);
    }
    for (let i = 0; i <= 3; i++) {
      fugitiveEmission
        .cell(64 + revLength + i, 9, 64 + revLength + i, 10, true)
        .style(border);
    }
    for (let i = 0; i <= 5; i++) {
      fugitiveEmission
        .cell(67 + revLength + i, 3, 67 + revLength + i, 4, true)
        .style(border);
    }
    for (let i = 0; i <= 5; i++) {
      fugitiveEmission
        .cell(74 + revLength + i, 3, 74 + revLength + i, 4, true)
        .style(border);
    }
    for (let i = 0; i <= 7; i++) {
      fugitiveEmission
        .cell(80 + revLength + i, 2, 80 + revLength + i, 4, true)
        .style(border);
    }
    fugitiveEmission
      .cell(89 + revLength, 2, 89 + revLength, 10, true)
      .style(italics);
    fugitiveEmission
      .cell(91 + revLength, 2, 91 + revLength, 10, true)
      .style(border)
      .style(heading);

    fugitiveEmission
      .cell(92 + revLength, 3, 92 + revLength, 10, true)
      .style(border);
    fugitiveEmission
      .cell(93 + revLength, 3, 93 + revLength, 10, true)
      .style(border);
    res(wb);
  });
};
module.exports = { generateExcel };
