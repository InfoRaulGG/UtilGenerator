const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
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
app.listen(8080);

console.log('Running at Port 8080');