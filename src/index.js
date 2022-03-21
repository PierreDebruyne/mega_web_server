const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const storage_path = (process.env.STORAGE_PATH) ? process.env.STORAGE_PATH + "/" : "./";
const app = express();
const request = require('request');
app.use(express.static(path));
var corsOptions = {

};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let proxy_url = process.env.PROXY_URL || "127.0.0.1"
let proxy_port = process.env.PROXY_PORT || 25002


app.all('/*', function (req,res) {
    console.log(req.url);
    if (req.url.startsWith('/api')) {
        var method = req.method.toUpperCase();
        var url = "http://" + proxy_url + ":" + proxy_port + "/" + req.path.substring(5);

        var options = {
            headers: {"Connection": "close"},
            url: url,
            method: method,
            json: true,
            body: req.body
        };
        console.log(options);

        function callback(error, response, data) {

            return res.status(response.statusCode).json(data).end();
        }

        request(options, callback);
    } else {
        res.sendFile(storage_path + "index.html");
    }
});


const PORT = process.env.PORT || 25003;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});