var AppointmentView = Backbone.View.extend({
  template: _.template("<span><%= model.escape('title') %></span>"),
  render: function(){
    this.$el.html(this.template({model:this.model}));
  }
});