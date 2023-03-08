const express = require('express');
const mongoose = require('mongoose');
const connectToDB = require('./db/conn');
const app = express();
const cors = require("cors");
require("dotenv").config({ path: ".env" });

const itemRouter = require('./routes/Item');
const Item = require('./models/Item');


app.use(cors());
app.use(express.json());

app.use('/api', itemRouter);

connectToDB()
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Server listening on port ${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.error('Failed to connect to MongoDB', err);
    });
