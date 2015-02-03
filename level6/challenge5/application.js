var AppointmentApp = new (Backbone.View.extend({
  Collections: {},
  Models: {},
  Views: {},
  events:{
    "click a[data-backbone]":function(e){
  e.preventDefault();
    Backbone.history.navigate(e.target.pathname,{trigger: true});
    }
  }
}))({el: document.body});