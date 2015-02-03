var express = require('express');
var cors = require('cors');
var app = express();
app.use(cors())
app.get('/$',
  function(req, res) {
    res.send('Hello');
});

app.get('/appointments',
  function(req, res) {
  	var appointments = {
		"per_page": 10, 
		"page": 1, 
		"total": 50,
  		"appointments": [
    		{ "title": "Ms. Kitty Hairball Treatment", "cankelled": false, "identifier": 1 },
    		{ "title": "Mr. Bean", "cankelled": true, "identifier": 2 }
    	]
	}
    res.send(JSON.stringify(appointments));
});

app.get('/appointments/:id',
	function(req, res){
		var id = req.params.id;
		var appointment = { 
			"appointment": { 
				"title": "Ms. Kitty Hairball Treatment", 
				"cankelled": false, 
				"identifier": id
			} 
		}
		res.send(JSON.stringify(appointment));
	});
app.listen(1337);