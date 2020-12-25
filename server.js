'use strict';

import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import path from 'path';

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.setHeader('Cache-Control', 'no-cache, no-store');
    const { cookies } = req;
    if (cookies && cookies['theme'] === 'dark') {
        res.sendFile(path.join(__dirname, 'views', 'index_dark.html'));
    } else {
        // Light theme by default
        res.cookie('theme', 'light');
        res.sendFile(path.join(__dirname, 'views', 'index_light.html'));
    }
});

app.post('/theme', (req, res) => {
    if (req.body && (req.body['theme'] === 'light' || req.body['theme'] === 'dark')) {
        console.log(2);
        res.cookie('theme', req.body['theme']);
        res.sendStatus(200).end();
    } else {
        res.sendStatus(400).end();
    }
});


app.get('/projects', (req, res) => {
    const { cookies } = req;

    console.log('PROJECT');
    console.log(cookies);
    res.setHeader('Cache-Control', 'no-cache, no-store');
    if (cookies && cookies['theme'] === 'dark') {
        res.sendFile(path.join(__dirname, 'views', 'project_dark.html'));
    } else {
        // Light theme by default
        res.cookie('theme', 'light');
        res.sendFile(path.join(__dirname, 'views', 'project_light.html'));
    }
});

app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'projects.html'));
});

app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});