const {BrowserWindow ,app} = require('electron')
const path = require('path')


const createWindow = () => {
    const mainWindow = new BrowserWindow({
      width: 800,
      height: 600,
      alwaysOnTop: true,
      x: 1500,
      y: 100,
    //   frame: false,
    //   transparent: true,
    })

    mainWindow.setAspectRatio(1)
    // mainWindow.loadURL('https://www.houdunren.com')
    mainWindow.loadFile(path.resolve(__dirname, 'index.html'))
    mainWindow.webContents.openDevTools()

  }
  app.whenReady().then(() => {
    createWindow()
  })
  
  app.on('window-all-closed', () => {
    if (process.platform != 'darwin') app.quit()
  })
  
  app.on('activate', () => {
    createWindow()
  })
