import RequestHandler from '../RequestHandler.js';

export default class Prediction {
  constructor(clientId, clientSecret) {
    this.models = {
      DOG: 'dog',
      FASHION: 'fashion-v1',
      GENERAL: 'general-v3'
    };
    this.requestHandler = new RequestHandler(clientId, clientSecret);
  }

  /*
  getModels() {
    return this.requestHandler.sendRequest({
      method: 'GET',
      apiUrl: '/tagging/v2/models'
    });
  }
  */

  predictImage({modelId, mediaUrl, base64, area}) {
    var payload = {};

    if (typeof modelId === 'string' && modelId.length > 0) {
      payload.modelId = modelId;
    } else {
      throw new Error('Parameter modelId is invalid');
    }

    if (typeof mediaUrl === 'string' && mediaUrl.length > 0) {
      payload.mediaUrl = mediaUrl;
    } else if (typeof base64 === 'string' && base64.length > 0) {
      payload.base64 = base64;
    } else {
      throw new Error('One of mediaUrl or base64 is required, but none are valid');
    }

    if (area && area.hasOwnProperty('x') && area.hasOwnProperty('y') &&
        area.hasOwnProperty('w') && area.hasOwnProperty('h') &&
        !isNaN(area.x) && !isNaN(area.y) && !isNaN(area.w) && !isNaN(area.h)) {
      payload.area = area;
    }

    return this.requestHandler.sendRequest({
      method: 'POST',
      apiUrl: '/tagging/v2/prediction',
      data: payload
    });
  }
};
