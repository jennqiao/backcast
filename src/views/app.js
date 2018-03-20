var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.render();

    this.videos = new Videos(exampleVideoData);

    this.videoListView = new VideoListView({collection: this.videos});
    this.videoListView.render();

    this.videoPlayerView = new VideoPlayerView({model: this.videos.toJSON()[0]});
    this. videoPlayerView.render();
  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
