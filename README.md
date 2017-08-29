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
const scopemedia from 'PATH_TO/scopemedia.min.js';
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

#### Parameters
```
{
  medias: array of image url
}
```

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

```js
similarSearch.searchImage({
  mediaUrl: 'https://example.com/example_1.jpg'
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

```js
const predictionModels = imagePrediction.getModels();
console.log(predictionModels);
```

### .predictImage

```js
imagePrediction.predictImage({
  modelId: imagePrediction.models.GENERAL,
  mediaUrl: 'https://example.com/example_1.jpg'
})
.then((response) => {
  console.log(response);
})
.catch((error) => {
  console.log(error);
});
```
