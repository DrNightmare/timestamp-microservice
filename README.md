# timestamp-microservice
A simple timestamp formatting microservice using Node and Express

# Installation
Clone the repository, cd into it and install using NPM.

```
git clone https://github.com/DrNightmare/timestamp-microservice
cd timestamp-microservice
npm install
node timeStampMS.js
```

Now the service is running at localhost, port 3000.

# Usage
Send a single parameter, in one of 2 ways:

As a unix timestamp : http://127.0.0.1:3000/1450117800

As natural date : http://127.0.0.1:3000/December%2015,%202015

Example result:

The service returns data in the following format:

{"unix":1450137600,"natural":"December 15, 2015"}

This is one of the API projects listed in FreeCodeCamp [here](https://www.freecodecamp.com/challenges/timestamp-microservice).
