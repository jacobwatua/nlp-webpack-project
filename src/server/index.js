const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require("cors");
const { sendData } = require('./meaningCloudApi');
const dotEnv = require("dotenv").config();
const port = process.env.PORT;
const apiKey = process.env.API_KEY;
const lang = "en";

const textapi = {
    apiKey,
    lang,
    baseUrl: `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&lang=${lang}&uw=n&txt=`,
};

let appData;

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

app.use(express.static('dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('src/client/views/index.html'));
});

app.post('/article', async (req, res) => {
    const data = req.body;
    const url = `${textapi.baseUrl}${encodeURIComponent(data.article)}`;
    const response = await sendData(url);
    appData = response;
    console.log(appData);
    res.end();
});

app.get('/article/meaning', (req, res) => {
    res.send(appData);
});

app.listen(port, function () {
    console.log('Server listening on port!', port);
});
