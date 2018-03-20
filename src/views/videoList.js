var VideoListView = Backbone.View.extend({

  el: '.list',

  initialize: function() {
    
    this.collection.on('sync', this.render, this);
  },
  
  render: function() {
    
 
    this.$el.children().detach();
    this.collection.forEach(this.renderVideoEntry, this);

    return this;
  },

  renderVideoEntry: function(video) {
    var videoListEntryView = new VideoListEntryView({model: video});
    this.$el.append(videoListEntryView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
