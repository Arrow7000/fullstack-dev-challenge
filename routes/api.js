const express = require('express');
const router = express.Router();

router.post('/savings', (req, res) => {
    const { test } = req.body;
    res.send(req.body);
});

module.exports = router;