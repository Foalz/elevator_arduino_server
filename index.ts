import { Express } from "express";
import {createServer} from "http";
const express = require("express");
const app:Express = express();
const httpServer = createServer(app);
const port = 3333;
const os = require("os");
const cors = require("cors");
const bodyParser = require("body-parser");

//Getting network local IP
let interfaces = os.networkInterfaces();
let addresses:string[] = [];
for (let k in interfaces) {
    for (let k2 in interfaces[k]) {
        let address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}

//Middlewares and configuration
const morgan = require('morgan');
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(express.static(process.cwd() + '/public'));

//Importing routes for arduino actions (Maintenance mode)
app.use(require('./routes/Actions'));

//Starting server with current device IP address
httpServer.listen(port, addresses[0],() => { 
  console.log(`Server URL: ${addresses}:${port}`)  
});
