var VideoPlayerView = Backbone.View.extend({

  el: '.player',

  render: function() {
    this.$el.html('<div class="loading">Please wait...</div>');
    this.$el.html(this.template(this.model));
    return this.$el;
  },

  template: _.template('<div class="video-player">\
  <div class="embed-responsive embed-responsive-16by9">\
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/<%- id %>" allowFullScreen></iframe>\
  </div>\
  <div class="video-player-details">\
    <h3><%- snippet.title %></h3>\
    <div><%- snippet.description %></div>\
  </div>\
</div>\
')

});
