import * as express from "express";
const { join } = require('path');
const router = express.Router();
import { SerialPort, ReadlineParser } from 'serialport'

//Initializing
const serialPort = new SerialPort({
  path: '/dev/ttyUSB0',
  baudRate: 9600,
});

//Notifies if the port has been opened
serialPort.on('open', () => {
  serialPort.set({ dtr: true, rts: true, });
  console.log('Opened Port.') 
});

//Setting Arduino under maintenance
router.post('/setMaintenance/:value', (req, res) => {
  const msg = req.params.value == "1" ? "m" : "n";
  console.log(msg);
  serialPort.write(msg, function(err){});
  res.end();
});

//Request floor
router.post('/request_floor/:id', (req, res) => {
  const msg = req.params.id;
  serialPort.write(msg, function(err){});
  res.end();
});

module.exports = router;
