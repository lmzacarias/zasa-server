require('dotenv').config();
const express = require('express');
const cors = require('cors');
const dbConnect = require('./config/db_mongo');

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Listening port: ${port}`)
}
);

dbConnect();