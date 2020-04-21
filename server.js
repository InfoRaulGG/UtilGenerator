const express = require('express');
const path = require('path');
const https = require('https');
const fs = require('fs');

const app = express();
const router = express.Router();
const PORT = (process.env.PORT || 8080);

const key = fs.readFileSync(__dirname + '/keys/selfsigned.key');
const cert = fs.readFileSync(__dirname + '/keys/selfsigned.crt');
var options = {
    key: key,
    cert: cert
};

app.use(express.static(__dirname));

router.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    //__dirname : It will resolve to your project folder.
});
app.all('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

//add the router
app.use('/', router);

const server = https.createServer(options, app);
app.listen(PORT, () => {
    console.log("server starting on port : " + PORT)
});