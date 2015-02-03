var AppRouter = new (Backbone.Router.extend({
  routes: {
    "/":"catchall",
    "*path":  "notFound"
  },
  notFound:function(){
    console.console.log("catchall");
  },
  show: function(id){
    var appointment = new Appointment({id: id});
    console.log(appointment);
  }
}));