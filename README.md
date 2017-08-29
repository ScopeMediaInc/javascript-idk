ScopeMedia JavaScript SDK
=====
A JavaScript SDK to easily integrate [ScopeMedia API](https://developer.scopemedia.com/documentation/) in your application

Installation
-----
Get the latest build SDK in **/build** folder or from ScopeMedia server: [https://developer.scopemedia.com/js/scopemedia.min.js](https://developer.scopemedia.com/js/scopemedia.min.js)

Script tag:
```js
<script type="text/javascript" src="https://developer.scopemedia.com/js/scopemedia.min.js"></script>
```

CommonJS:
```js
import scopemedia from 'PATH_TO/scopemedia.min.js';
```

AMD:
```js
const scopemedia = require('PATH_TO/scopemedia.min.js');
```

Similar Image Search
-----

### Initialization

```js
// Obtain your application's client ID and secret from dashboard
const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';

const similarSearch = new scopemedia.image.SimilarSearch(clientId, clientSecret);
```

### .addImage
Add images to your application

##### Input
```js
{
  medias: array of image url
}
```

##### Return
Promise

##### Example
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

### .getAllImage
Get the image set in your application

##### Input
```js
{
  page: `pagination number`,
  size: `number of images per page`
}
```

##### Return
Promise

##### Example
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

### .searchImage
Given an image, search similar image from your application's image set

##### Input
```js
{
  mediaId: `an image ID from your application image set. one of mediaId, mediaUrl and base64 is required`,
  mediaUrl: `an image URL. one of mediaId, mediaUrl and base64 is required`,
  base64: `a base64 encoded image. one of mediaId, mediaUrl and base64 is required`,
  area: `_optional_ rectangle within the input image for search (see example) `
}
```

##### Return
Promise

##### Example
```js
similarSearch.searchImage({
  mediaUrl: 'https://example.com/example_1.jpg',
  // do similar search using the 200x200 rectangle at (100, 100) in the input image
  area: {
    x: 100,
    y: 100,
    w: 200,
    h: 200
  }
})
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
});
```

Image Prediction
-----

### Initialization
```js
// Obtain your application's client ID and secret from dashboard
const clientId = 'YOUR_CLIENT_ID';
const clientSecret = 'YOUR_CLIENT_SECRET';

const imagePrediction = new scopemedia.image.Prediction(clientId, clientSecret);
```

### .getModels
Get the list of available image prediction model

##### Return
String array

### Example
```js
const predictionModels = imagePrediction.getModels();
console.log(predictionModels);
```

### .predictImage

##### Input
```js
{
  modelId: `prediction model`,
  mediaUrl: `an image URL. one of mediaUrl and base64 is required`,
  base64: `a base64 encoded image. one of mediaUrl and base64 is required`,
  area: `_optional_ rectangle within the input image for prediction (see example) `
}
```

##### Return
Promise

### Example
```js
imagePrediction.predictImage({
  modelId: imagePrediction.models.GENERAL,
  mediaUrl: 'https://example.com/example_1.jpg',
  // do similar search using the 200x200 rectangle at (100, 100) in the input image
  area: {
    x: 100,
    y: 100,
    w: 200,
    h: 200
  }
})
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
});
```
