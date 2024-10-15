const {BrowserWindow ,app} = require('electron')
const path = require('path')


app.whenReady().then(() => {
    const mainWindow = new BrowserWindow({
        width: 1000,
        height: 600,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: true
        }
        
    })
    // mainWindow.loadURL('https://www.houdunren.com')
    mainWindow.loadFile(path.join(__dirname, 'index.html'))
    mainWindow.webContents.openDevTools()
})

// 添加这些事件处理程序
app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow()
    }
})
