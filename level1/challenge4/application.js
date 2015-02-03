var domainURL = "http://localhost:1337";
var Appointment = Backbone.Model.extend({
  urlRoot:domainURL + "/appointments",
  idAttribute:"identifier",
  parse: function(response){
  	response = response.appointment;
  	response.cancelled = response.cankelled;
  	delete response.cankelled
	return response;
  }
});

var data = { 
	"appointment": { 
		"title": "Ms. Kitty Hairball Treatment", 
		"cankelled": false, 
		"identifier": 1 
	}
};
var appointment = new Appointment(data,{parse:true});
appointment.fetch( );