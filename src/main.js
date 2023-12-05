const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 1000,
    height: 800,
  });

  win.loadURL("http://localhost:3000");
};

app.whenReady().then(() => {
  createWindow();
});
