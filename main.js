const electron = require('electron')

const app = electron.app
const BrowserWindow = electron.BrowserWindow

let mainWindow = null

app.on('ready',()=>{
  mainWindow = new BrowserWindow({
    width: 800,height:800,
    webPreferences: {
      nodeIntegration: true,  
    }
  })
  mainWindow.loadFile('./index.html')
  mainWindow.on('close',()=>{mainWindow = null})
})