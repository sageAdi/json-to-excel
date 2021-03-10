const express = require("express");
const { generateExcel } = require("./app");

const app = express();
const port = 8080;

app.get("/excel", async (req, res) => {
  try {
    const wb = await generateExcel();
    wb.write("MyExcel.xlsx", function (err) {
      if (err) {
        res.send(err);
      } else {
        res.sendFile(__dirname + "/MyExcel.xlsx");
      }
    });
  } catch (err) {
    res.send("Error Message:" + err);
    console.log("Error Message:" + err);
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}/excel`);
});
