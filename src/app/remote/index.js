const remote = window.remote;

const { app, getCurrentWindow, globalShortcut, screen } = remote;

const terminateApp = () => {
  app.quit();
};

const registerMovingWindowShortcut = (keys = "Alt+Shift+W") => {
  globalShortcut.register(keys, () => {
    const { x, y } = screen.getCursorScreenPoint();
    getCurrentWindow().setPosition(x, y);
  });
};

module.exports = { terminateApp, registerMovingWindowShortcut };
