const express = require('express');
const mongoose = require('mongoose');
const connectToDB = require('./db/conn');
const app = express();
const cors = require("cors");
require("dotenv").config({ path: ".env" });

const Item = require('./models/Item');

app.use(cors());
app.use(express.json());

connectToDB()
    .then(() => {
        app.get('/itemget', async (req, res) => {
            try {
              const items = await Item.find();
              res.status(200).json(items);
            } catch (err) {
              console.error('Failed to get items', err);
              res.status(500).send('Failed to get items');
            }
          });
          
        app.listen(process.env.PORT, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });
