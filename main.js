// Modules to control application life and create native browser window
const path = require('path'),
	{app, BrowserWindow} = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;

var createWindow = () => {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 780,
		height: 520,
		frame: true,
		show: false,
		resizable: false,
		icon: path.join(__dirname, '/assets/imgs/icon.ico'),
		webPreferences: {
			nodeIntegration: true,
			nodeIntegrationInWorker: true
		}
	});

	// Remove or hide menu
	mainWindow.setMenuBarVisibility(false);

	// show and load the index.html of the app.
	mainWindow.loadFile('pages/index.html');
	mainWindow.once('ready-to-show', () => {
		setTimeout(() => {
			mainWindow.show();
		}, 3000);
	});

	// Open the DevTools.
	mainWindow.webContents.openDevTools();

	// Emitted when the window is closed.
	mainWindow.on('closed', function () { mainWindow = null; });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
	// On macOS it is common for applications and their menu bar
	// to stay active until the user quits explicitly with Cmd + Q
	if (process.platform !== 'darwin') app.quit();
});

app.on('activate', function () {
	// On macOS it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	if (mainWindow === null) createWindow();
});

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
