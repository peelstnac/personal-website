'use strict';

import dotenv from 'dotenv';
import express from 'express';
import path from 'path';

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.get('/', (req, res) => {
    console.log(1);
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
app.get('/resume', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'projects.html'));
});
app.get('/projects', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'projects.html'));
});
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'projects.html'));
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});