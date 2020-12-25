'use strict';

import express from 'express';
import path from 'path';

const router = express.Router();

router.get('/', (req, res) => {
    // Prevent the back button from caching results for consistent themes.
    res.setHeader('Cache-Control', 'no-cache, no-store');
    const suffix = '_' + req.theme + '.html';
    res.sendFile(path.join(__dirname, '..', 'views', 'projects' + suffix));
});

export default router;