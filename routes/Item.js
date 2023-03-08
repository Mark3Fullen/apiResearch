const express = require('express');
const router = express.Router();
const Item = require('../models/Item');

router.get('/itemget', async (req, res) => {
  try {
    const items = await Item.find();
    console.log(items);
    res.json(items);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;