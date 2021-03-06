const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: {
        index: {
            import: './js/index/index.js',
            dependOn: 'shared'
        },
        projects: {
            import: './js/projects/projects.js',
            dependOn: 'shared'
        },
        shared: ['./js/common/theme.js']
    },
    output: {
        filename: '[name].[contenthash].bundle.js',
        path: path.join(__dirname, 'build', 'public')
    },
    module: {
        rules: [
            {
                test: /\.html$/i,
                loader: 'html-loader',
            },
            {
                test: /\.css/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.png/i,
                loader: 'file-loader',
                options: {
                    name: '[name].[contenthash].[ext]'
                }
            }
        ]
    },
    optimization: {
        minimizer: [new TerserWebpackPlugin(), new CssMinimizerWebpackPlugin()]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index_light.html',
            template: './templates/index_light.html',
            chunks: ['shared', 'index'],
            scriptLoading: 'blocking'
        }),
        new HtmlWebpackPlugin({
            filename: 'index_dark.html',
            template: './templates/index_dark.html',
            chunks: ['shared', 'index'],
            scriptLoading: 'blocking'
        }),
        new HtmlWebpackPlugin({
            filename: 'projects_light.html',
            template: './templates/projects_light.html',
            chunks: ['shared', 'projects'],
            scriptLoading: 'blocking'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[contenthash].bundle.css'
        }),
        new CleanWebpackPlugin()
    ]
};