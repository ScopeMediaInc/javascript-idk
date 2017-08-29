ScopeMedia JavaScript SDK
=====

A JavaScript SDK to easily integrate [ScopeMedia API](https://developer.scopemedia.com/documentation/) in your application

Similar Search
-----

### Initialization

```js
// Obtain your application's client ID and secret from dashboard
const clientId = 'YOUR CLIENT ID';
const clientSecret = 'YOUR CLIENT SECRET';

const similarSearch = new scopemedia.image.SimilarSearch(clientId, clientSecret);
```

### Add Image(s) to your application

```js
similarSearch.addImage({
  medias: [
    'https://example.com/example_1.jpg',
    'https://example.com/example_2.jpg',
    'https://example.com/example_3.jpg'
  ]
})
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
});
```

### Get Image set from your application

```js
similarSearch.getAllImage({
  page: 0,
  size: 20
})
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
});
```
