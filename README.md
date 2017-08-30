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

Authentication
-----
Before start, you need to [sign up](https://api.scopemedia.com/#/signup) and [create API key](https://api.scopemedia.com/#/dashboard/products/ScopeCheck/feature). Each application you created is paired with one client ID and one client secret, which are needed to initialize the SDK.

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
Add image(s) to your application's image set

##### Input
```
{
  medias: array of image url
}
```

##### Return
_Promise_ object

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
Get your application's image set

##### Input
```
{
  page: pagination number,
  size: number of images per page
}
```

##### Return
_Promise_ object

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
Search similar image from your image set

##### Input
```
{
  // only one of mediaId, mediaUrl or base64 is required
  mediaId: an image ID from your application image set,
  mediaUrl: an image URL,
  base64: a base64 encoded image,
  // optional
  area: use a cropped area instead of the whole image (see example)
}
```

##### Return
_Promise_ object

##### Example
```js
similarSearch.searchImage({
  mediaUrl: 'https://example.com/example_1.jpg',
  // crop a 200x200 area where the top left corner is at (100, 100) of the original image
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
Get the list of prediction model

##### Return
String array

##### Example
```js
const predictionModels = imagePrediction.getModels();
console.log(predictionModels);
```

### .predictImage

##### Input
```
{
  modelId: prediction model,
  // only one of mediaUrl or base64 is required
  mediaUrl: an image URL,
  base64: a base64 encoded image,
  // optional
  area: use a cropped area instead of the whole image (see example)
}
```

##### Return
_Promise_ object

##### Example
```js

/*
  The following models are available in models property:
  GENERAL
  DOG
  FASHION
*/

imagePrediction.predictImage({
  modelId: imagePrediction.models.GENERAL,
  mediaUrl: 'https://example.com/example_1.jpg',
  // crop a 200x200 area where the top left corner is at (100, 100) of the original image
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
