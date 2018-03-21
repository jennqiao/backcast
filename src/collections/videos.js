var Videos = Backbone.Collection.extend({

  model: Video,

  search: function(searchTerm) {
    this.fetch(searchTerm, this);
  },

  fetch: function(searchTerm, context) {  
    $.ajax({
      data: {
        key: 'AIzaSyDWmoDnEgQLI4_tO1-juGPIkIvmg9dHaXQ',
        q: searchTerm,
        part: 'snippet',
        maxResults: 5,
        videoEmbeddable: true,
        type: 'video'
      },
      url: 'https://www.googleapis.com/youtube/v3/search', 
      type: 'GET',
      dataType: 'json',
      success: function (data) {
        console.log('success!', data);
        var parsedData = context.parse(data);
        context.trigger('update', parsedData);
      }, 
      error: function (data) {
        console.log('failed!', data);
      }
    });
  },

  parse: function(data) {
    console.log('data items', data.items);
    return data.items;
  }

});
