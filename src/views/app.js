var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
   
    this.render();

    this.videos = new Videos(exampleVideoData);
    this.videos.search('coding');
    
    this.videoListView = new VideoListView({collection: this.videos});
    this.videoListView.render();

    this.videoPlayerView = new VideoPlayerView({collection: this.videos});
    this.videoPlayerView.render();
    
    this.searchView = new SearchView({collection: this.videos});
    this.searchView.render();

  },


  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/app.html')

});
