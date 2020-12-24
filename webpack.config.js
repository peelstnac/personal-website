const path = require('path');

module.exports = {
    entry: {
        index: './public/js/index/index.js',
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public', 'dist')
    }
};