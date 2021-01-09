'use strict';

import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import path from 'path';
// Import routes.
import projects from './routes/projects';
import resume from './routes/resume';

dotenv.config();
const app = express();

app.use(express.static(path.join(__dirname, 'build', 'public')));
app.use(cookieParser());
app.use(express.json());

const themes = [
    'light',
    'dark'
];

/**
 * Middleware to check for theme attribute in cookie.
 * If not found or invalid, default to light theme.
 */
app.use('/', (req, res, next) => {
    const { cookies } = req;
    if (!cookies || !themes.includes(cookies['theme'])) {
        req.theme = 'light';
        res.cookie('theme', 'light');
    } else {
        req.theme = cookies['theme'];
    }

    next();
});

app.get('/', (req, res) => {
    // Prevent the back button from caching results for consistent themes.
    res.setHeader('Cache-Control', 'no-cache, no-store');
    const suffix = '_' + req.theme + '.html';
    res.sendFile(path.join(__dirname, 'build', 'public', 'index' + suffix));
});

app.post('/theme', (req, res) => {
    if (req.body && themes.includes(req.body['theme'])) {
        res.cookie('theme', req.body['theme']);
        res.sendStatus(200).end();
    } else {
        res.sendStatus(400).end();
    }
});

// Mount routes.
app.use('/projects', projects);
app.use('/resume', resume);


app.listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
});