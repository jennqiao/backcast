var VideoListEntryView = Backbone.View.extend({

  // initialize: function() {
  //   this.model.on('click: video-list-entry-title', this.model.select, this);
  // },
  
  events: {
    'click .video-list-entry-title': 'handleClick'
  },

  handleClick: function(e) {
    var field = $(e.target.id);
    this.model.select();
  },

  render: function() {
    this.$el.html(this.template(this.model.toJSON()));
    return this.$el;
  },

  // template: templateURL('src/templates/videoListEntry.html')
  template: _.template('<div class="video-list-entry media"> \
                          <div class="media-left">\
                            <img class="media-object" src= <%- snippet.thumbnails.default.url %> />\
                          </div> \
                          <div class="media-body"> \
                            <div class="video-list-entry-title" id="<%- id %>"><%- snippet.title %></div> \
                            <div class="video-list-entry-detail"><%- snippet.description %></div> \
                          </div>\
                        </div> ')
});
