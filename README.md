This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### To Run:

```
git clone https://github.com/alexthedar/search-giphy.git
cd search-giphy
yarn start
```

### To Test

```
yarn test
```

### Capabilities

- App loads 25 trending gifs on start.
- User may click on trending to see tredning gif/stickers
- User may enter search text and click button or hit enter to search giphy for term
- User may switch between gifs or stickers using toggle buttons
- User may click on gif/sticker to open modal and see full animation.
- User/developer may see redux logger in console

#### Tech:

- Giphy JS SDK API
- Redux
- React-Bootstrap
- Jest, Enzyme, chai

#### Todo:

- Pagination or lazy loading to show more than 25
- Add random button to ping giphy random api and trigger select image modal
- use formik or make searchForm stateful to take form duty out of redux
- add router so user can use browser controls to go back/forward through history
- add component/message for when no results from api
- allow user to see still or downsampled of list
- implement language support
- allow user choice of images/animations
- show user meta data of fig/sticker
- integration tests and more unit tests

