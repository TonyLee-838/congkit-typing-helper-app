const { app, BrowserWindow, screen, globalShortcut } = require("electron");
const path = require("path");
const isDev = require("electron-is-dev");

const { allFilesExist, initializeDb } = require("./setupDb");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 270,
    width: 475,
    transparent: true,
    alwaysOnTop: true,
    maximizable: false,
    resizable: false,
    x: 0,
    y: 0,
    webPreferences: {
      enableRemoteModule: true,
      preload: __dirname + "/preload.js",
    },
  });

  if (!allFilesExist()) initializeDb();

  mainWindow.loadURL(
    isDev
      ? "http://localhost:3010"
      : `file://${path.join(__dirname, "../build/index.html")}`
  );

  if (process.platform === "darwin") mainWindow.setAutoHideMenuBar(true);
};

app.on("ready", createWindow);

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
