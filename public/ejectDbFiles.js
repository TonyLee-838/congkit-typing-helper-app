const fs = require("fs");
const path = require("path");
const { app } = require("electron");
const STORE_PATH = app.getPath("userData");

const { keyInfo } = require("./resource/key-default-info.json");
const congkit = require("./resource/congkit5_TC.json");
const config = require("./resource/default-config.json");

const files = [
  { path: path.join(STORE_PATH, "/key-default-info.json"), data: { keyInfo } },
  { path: path.join(STORE_PATH, "/key-info.json"), data: { keyInfo } },
  { path: path.join(STORE_PATH, "/memo.json"), data: { memo: [] } },
  {
    path: path.join(STORE_PATH, "/congkit-dictionary.json"),
    data: { dict: congkit },
  },
  { path: path.join(STORE_PATH, "/app-config.json"), data: config },
];

const initializeDb = () => {
  files.forEach(({ path, data }) =>
    fs.writeFileSync(path, JSON.stringify(data))
  );
  console.log("DB files initialized!");
};
const allFilesExist = () => {
  return files.every(({ path }) => fs.existsSync(path));
};

module.exports = {
  initializeDb,
  allFilesExist,
};
