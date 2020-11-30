const { app, BrowserWindow, screen, globalShortcut } = require("electron");

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

  mainWindow.loadURL("http://localhost:3010");
  if (process.platform === "darwin") mainWindow.setAutoHideMenuBar(true);

  globalShortcut.register("Alt+Shift+W", () => {
    const { x, y } = screen.getCursorScreenPoint();
    mainWindow.setPosition(x, y);
  });
};
app.whenReady().then(() => {});

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
