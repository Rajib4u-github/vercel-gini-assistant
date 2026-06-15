// const fs = require('node:fs');
const fs = require('fs');
const path = require('path');
const ROOT_DIR = require("path").resolve();

const applicationName = 'NPM_INFO';
const fileName = 'npmInfo'
const new_app_folder_structure_setup = {
    serverAppDataFilePath : ROOT_DIR+'/server/'+applicationName+'/store/'+fileName+'Data.js',
    serverControllerFilePath : ROOT_DIR+'/server/'+applicationName+'/controllers/'+fileName+'.controller.js',
    clientHtmlFilePath : ROOT_DIR+'/client/'+applicationName+'/'+fileName+'App.html',
    clientCssFilePath : ROOT_DIR+'/assets/css/'+applicationName+'/'+fileName+'App.css',
    clientJsFilePath : ROOT_DIR+'/assets/js/'+applicationName+'/controllers/'+fileName+'App.client.controller.js',

}

const new_app_folder_structure_config = [
    {
        newFolderName: 'NPM_INFO',
        newFolderPath: './server/'+applicationName+'/store',
        newFileName: fileName+'Data.js',
        sourceFile: './server/publicApis/store/publicApisData.js',
        destinationFile: ''
    },
    {
        newFolderName: 'NPM_INFO',
        newFolderPath: './client/'+applicationName,
        newFileName: fileName+'App.html',
        sourceFile: './client/publicApis/publicApisApp.html',
        destinationFile: ''
    },
    {
        newFolderName: 'NPM_INFO',
        newFolderPath: './assets/css/'+applicationName,
        newFileName: fileName+'App.css',
        sourceFile: './assets/css/publicApis/publicApisApp.css',
        destinationFile: ''
    },
    {
        newFolderName: 'NPM_INFO',
        newFolderPath: './assets/js/'+applicationName+'/controllers',
        newFileName: fileName+'App.controller.js',
        sourceFile: './assets/js/publicApis/controllers/publicApis.client.controller.js',
        destinationFile: ''
    },
]

function createNewFileAsync(fileObj){
    try {
        // Define directory and file paths

        const folderPath = path.join(__dirname, fileObj.newFolderPath);
        const filePath = path.join(folderPath, fileObj.newFileName);
        const fileContent = '';
        const sourceFile = path.join(__dirname, fileObj.sourceFile);
        const destFolder = path.join(__dirname, 'new-folder');
        const destFile = path.join(destFolder, 'copied-destination.txt');

        // 1. Create the new folder safely
        fs.mkdir(folderPath, { recursive: true }, (err) => {
            if (err) {
                return console.error('Error creating folder:', err);
            }
            
            // 2. Create and write content to the file inside that folder
            fs.writeFile(filePath, fileContent, 'utf8', (err) => {
                if (err) {
                    return console.error('Error creating file:', err);
                }
                console.log('Folder and file created successfully!');
            });

             // Direct, optimized file copy
            fs.copyFile(sourceFile, filePath, (err) => {
                if (err) return console.error('Copy file error:', err);
                console.log('====== File content copied successfully using copyFile! =======');
                });
            });
    } catch (e) {
        console.log("@@@@ catch :: ", e);
    } finally {

    }
}


// createTestFileAsync(new_app_folder_structure_config[0])

function createNewAppFolderStructure(fileObjArr){
    const p = new Promise((resolve, reject) => {
        try{
            fileObjArr.forEach((fileObj, fileIndex) => {
                    createNewFileAsync(fileObj)
            })
            resolve(200)
        }catch(err){
            console.log("=== occur error :  ", err)
        }
    })
    return p;
}

//createNewAppFolderStructure(new_app_folder_structure_config);

module.exports.createNewAppFolderStructure = createNewAppFolderStructure;
