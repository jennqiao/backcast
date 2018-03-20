var SearchView = Backbone.View.extend({

  el: '.navbar',
 
  events: {
    'click #searchButton': 'handleSubmit',
    'keyup #searchTerm': 'keyPressEventHandler'
  },

  render: function() {
    this.$el.html(this.template());
    return this;
  },

  
  handleSubmit: function() {
    var searchTerm = this.$el.find('#searchTerm').val();
    // this.collection.trigger('submit', searchTerm);
    this.collection.search(searchTerm);
    this.$el.find('#searchTerm').val('');
  },

  keyPressEventHandler: function(event) {
    if (event.keyCode === 13) {
      this.$('#searchButton').click();
    }
  },

  template: templateURL('src/templates/search.html')

});
