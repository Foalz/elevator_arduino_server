# elevator_arduino_server

A rest API made to interact with [Elevator Arduino Project](https://github.com/Foalz/elevator_sketch) made for university project. 

But it can be adapted to work with any arduino project, this is just a basic base and example you could expand.

This is ideal to work with Arduino UNO.

## Dependencies

Make sure to have installed [Node.js](https://nodejs.org/en) to run this project.

Also, you will need to install the following dependency via npm to make easier the develop process.

Open a terminal, and write the following code:

### Windows

You will need to open cmd as administrator:

```bash
npm i -g nodemon
```

### Linux
```bash
sudo npm i -g nodemon
```

after you have cloned this repo, you must go inside the project folder:

```bash
cd elevator_arduino_server
```

and execute:

```bash
npm i
```

this will install all the dependencies of the project to work with arduino.

## Considerations

Make sure that only this server has opened serial port, otherwise, all the data transmitted to Arduino might not work (it means to
not having Serial Monitor or related stuff opened on Arduino IDE or another program).

For more information you can read: [Serial port with javascript](https://serialport.io/)

