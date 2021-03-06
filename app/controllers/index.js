const fs = require('fs');
const path = require('path');

module.exports = app => {
    fs
        .readSync(__dirname)
        .filter(file => ((file.index0f('.')) !== 0 && (file !== "index.js")))
        .forEach(file => require(path.resolve(__dirname, file))(app));
        
};
