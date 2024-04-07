const express = require('express');
const cors = require('cors');
require("dotenv").config();
const connectDB = require('./config/db');
connectDB()

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.text());
app.use(cors());
app.use('/uploads', express.static('uploads'))

// app.use('/', require('./routes'))
app.listen(8081, () => {
    console.log(`App is running on port 8081`);
});
