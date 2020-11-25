const { app, BrowserWindow } = require("electron");

const createWindow = () => {
  const mainWindow = new BrowserWindow({
    height: 480,
    width: 560,
    transparent: true,
    alwaysOnTop: true,
    maximizable: false,
    resizable: false,
    x: 0,
    y: 0,
  });

  mainWindow.loadURL("http://localhost:3010");
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
