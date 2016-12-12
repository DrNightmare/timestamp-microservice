var express = require('express');
var moment = require('moment');
var path = require('path');
var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/:timeStamp', function(req, res) {
	var timeStamp = req.params.timeStamp;
	var unixTime, naturalTime;
	if (moment.unix(Number(timeStamp)).isValid()){
		unixTime = Number(timeStamp);
		naturalTime = moment.unix(Number(timeStamp)).format("MMMM D, YYYY");
	}
	else if (moment(timeStamp, "MMMM D, YYYY", true).isValid()) {
		unixTime = Number(moment(timeStamp, "MMMM D, YYYY").format("X"));
		naturalTime = timeStamp;
	}
	else {
		unixTime = naturalTime = null;
	}
	res.send({"unix" : unixTime, "natural" : naturalTime});
});

app.listen('3000', function(err, data) {
	if (err) console.log(err);
	console.log("Microservice running at port 3000");
})