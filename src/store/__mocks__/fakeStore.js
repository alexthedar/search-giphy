export default {
  app: {
    error: null,
    loading: false
  },
  giphy: {
    searchText: "cat",
    giphyType: "gifs",
    itemsArray: [
      {
        type: "gif",
        id: "test2",
        slug: "funny-cat-test1",
        images: {
          fixed_height_still: {
            url: "http://media2.giphy.com/media/test1/200.gif"
          },
          original: {
            url: "http://media2.giphy.com/media/test1/200.gif"
          }
        },
        title: "Funny Cat GIF1"
      },
      {
        type: "gif",
        id: "test2",
        slug: "funny-cat-test2",
        images: {
          fixed_height_still: {
            url: "http://media2.giphy.com/media/test2/200.gif"
          },
          original: {
            url: "http://media2.giphy.com/media/test2/200.gif"
          }
        },
        title: "Funny Cat GIF2"
      }
    ]
  }
};
