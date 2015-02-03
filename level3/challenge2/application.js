$(function() {
    var AppRouter = new (Backbone.Router.extend({
      routes: {
        "appointments/p:page(/pp:per_page)(/)": "page",
      },
      page: function(page, per_page){
        per_page = per_page || 10;

        this.appointments.fetch({data: {page: page, per_page: per_page}});
      }
    }));
});