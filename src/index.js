const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = (process.env.STORAGE_PATH) ? process.env.STORAGE_PATH + "/" : "./";
const app = express();
app.use(express.static(path));
var corsOptions = {

};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

let env = (process.env.ENV_PATH) ? JSON.parse(process.env.ENV_PATH): {}

app.get('/env', function (req, res) {
    res.status(200).json(env).end();
});


app.get('/*', function (req,res) {
    res.sendFile(path + "index.html");
});

const PORT = process.env.PORT || 25565;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});