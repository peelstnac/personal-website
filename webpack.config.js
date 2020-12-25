const path = require('path');

module.exports = {
    entry: {
        index: {
            import: './public/js/index/index.js',
            dependOn: ['theme']
        },
        projects: {
            import: './public/js/projects/projects.js',
            dependOn: ['theme']
        },
        theme: './public/js/common/theme.js'
    },
    output: {
        filename: '[name].js',
        path: path.join(__dirname, 'public', 'dist')
    }
};