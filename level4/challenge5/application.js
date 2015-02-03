var AppointmentView = Backbone.View.extend({
  template: _.template("<span><%= title %></span>"),
  initialize: function(){
    this.listenTo(this.model,'change:title', this.changedTitle);
  },
  render: function(){
    this.$el.html(this.template(this.model.attributes));
  },
  changedTitle: function(model, value, options){
    this.$('span').html(value);

    if (options.highlight !== false){
      this.$el.effect('highlight', {}, 1000); 
    }
  }
});