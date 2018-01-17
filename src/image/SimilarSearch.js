import RequestHandler from '../RequestHandler.js';

export default class SimilarSearch {
  constructor(clientId, clientSecret) {
    this.requestHandler = new RequestHandler(clientId, clientSecret);
  }

  addImage({medias}) {
    if (!(medias instanceof Array) || medias.length === 0) {
      throw new Error('Parameter medias is invalid');
    }

    return this.requestHandler.sendRequest({
      method: 'POST',
      apiUrl: '/search/v2/medias',
      data: {
        medias: medias.map(function (element) {return {mediaUrl: element};})
      }
    });
  }

  getAllImage({page = 0, size = 20}) {
    if (isNaN(page)) {
      throw new Error('Parameter page is invalid');
    }

    return this.requestHandler.sendRequest({
      method: 'GET',
      apiUrl: `/search/v2/medias?page=${page}&size=${size}`
    });
  }

  searchImage({mediaId, mediaUrl, base64, area}) {
    var payload = {};

    if (!isNaN(parseInt(mediaId))) {
      payload.mediaId = mediaId;
    } else if (typeof mediaUrl === 'string' && mediaUrl.length > 0) {
      payload.mediaUrl = mediaUrl;
    } else if (typeof base64 === 'string' && base64.length > 0) {
      payload.base64 = base64;
    } else {
      throw new Error('One of mediaId, mediaUrl or base64 is required, but none are valid');
    }

    if (area && area.hasOwnProperty('x') && area.hasOwnProperty('y') &&
        area.hasOwnProperty('w') && area.hasOwnProperty('h') &&
        !isNaN(area.x) && !isNaN(area.y) && !isNaN(area.w) && !isNaN(area.h)) {
      payload.area = area;
    }

    return this.requestHandler.sendRequest({
      method: 'POST',
      apiUrl: '/search/v2/similar',
      data: payload
    });
  }
};
