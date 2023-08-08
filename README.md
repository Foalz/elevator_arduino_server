# elevator_arduino_server

## Dependencies

Make sure to have installed [Node.js](https://nodejs.org/en) to run this project.

Also, you will need to install the following dependency via npm to make easier the develop process.

Open a terminal, and write the following code:

### Windows

You will need to open cmd as administrator:

```npm i -g nodemon```

### Linux
```sudo npm i -g nodemon```

after you have cloned this repo, you must go inside the project folder:

```cd elevator_arduino_server```

and execute:

```npm i```

this will install all the dependencies of the project to work with arduino.

## Considerations

Make sure that only this server has opened serial port, otherwise, all the data transmitted to Arduino might not work (it means to
not having Serial Monitor or related stuff opened on Arduino IDE or another program).

For more information you can read: [Serial port with javascript](https://serialport.io/)
