"use strict";
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());
app.get('/', (req, res) => {
    res.json({ message: 'API CHECKMENTOR' });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});