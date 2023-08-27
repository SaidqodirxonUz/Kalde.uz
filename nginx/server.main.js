/* eslint-disable no-undef */
const express = require("express");
const path = require("path"); // Modulni import qilishni unutmang

const app = express();

const distPath = path.join(__dirname, "dist");

app.use(express.static(distPath));

app.get("/", (req, res) => {
  const distHtmlPath = path.join(distPath, "index.html");
  res.sendFile(distHtmlPath);
});

app.listen(7001, () => {
  console.log("Frontend ishlayapti, 7001-portni eshitishni kutamiz...");
});
