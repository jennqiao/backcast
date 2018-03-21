var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    
    this.videos = new Videos(exampleVideoData);
    this.videos.search('coding');

    this.render();

    this.videos.on('update', function(parsedData) {
      console.log('heard the sync!');
      
      this.videos.reset(parsedData);
      this.render();
    }, this);
    
  },


  render: function() {
    this.$el.html(this.template());

    this.videoListView = new VideoListView({collection: this.videos});
    this.videoListView.render();

    this.videoPlayerView = new VideoPlayerView({collection: this.videos});
    this.videoPlayerView.render();
    
    this.searchView = new SearchView({collection: this.videos});
    this.searchView.render();

    return this;
  },

  template: templateURL('src/templates/app.html')

});
