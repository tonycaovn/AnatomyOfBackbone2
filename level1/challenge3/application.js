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

var appointment = new Appointment({identifier:7});
appointment.fetch( );