var AppointmentApp = {
  Collections: {},
  Models: {},
  Views: {}
}

AppointmentApp.Models.Appointment = Backbone.Model.extend({});
AppointmentApp.Collections.Appointments = Backbone.Collection.extend({});
AppointmentApp.Views.Appointment = Backbone.View.extend({});
AppointmentApp.Views.Appointments = Backbone.View.extend({});
AppointmentApp.AppRouter = new (Backbone.Router.extend({}))();