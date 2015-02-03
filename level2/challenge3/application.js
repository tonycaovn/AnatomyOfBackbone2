var domainURL = "http://localhost:1337";
var Appointment = Backbone.Model.extend({
  urlRoot:domainURL + "/appointments",
  idAttribute:"identifier",
	parse: function(response){
	  	response = response.appointment;
	  	response.cancelled = response.cankelled;
	  	delete response.cankelled
		return response;
	},
	toJSON: function(){
		var attrs = _.clone(this.attributes);
		attrs.cankelled = attrs.cancelled;
		attrs = _.pick(attrs,'title','cankelled','identifier');
		return {appointment:attrs};
	}
});

var Appointments = Backbone.Collection.extend({
	url:domainURL + "/appointments",
  parse: function(response){
    this.per_page = response.per_page;
    this.page = response.page;
    this.total = response.total;
    return response.appointments;
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

var AppointmentView = Backbone.View.extend({
  template: _.template('<span>' +
                        '<%= title %></span>' +
                        '<a href="#">x</a>'),

  render: function(){
    this.$el.html(this.template(this.model.attributes));
  }
});

var appointments = new Appointments( );
appointments.fetch({data:{since:'2013-01-01'}});