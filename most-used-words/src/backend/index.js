const { ipcMain } = require('electron')

const pathsToRows = require('./pathsToRows')
const prepareData = require('./prepareData')
const groupdWords = require('./groupWords')


ipcMain.on('process-subtitles', (event, paths) => {    
         
     pathsToRows(paths)
       .then(rows => prepareData(rows))
       .then(words => groupdWords(words))
       .then(groupedWords => event.reply('process-subtitles', groupedWords))
})  


