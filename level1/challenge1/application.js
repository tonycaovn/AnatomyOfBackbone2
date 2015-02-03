var domainURL = "http://localhost:1337";
var Appointment = Backbone.Model.extend({
  urlRoot:domainURL + "/appointments",
  parse: function(response){
	return response.appointment;
  }
});

var appointment = new Appointment({id:4});
appointment.fetch( );