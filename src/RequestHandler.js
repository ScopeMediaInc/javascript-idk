// import axios from 'axios';

const API_BASE_URL = 'https://api.scopemedia.com';
const QA_API_BASE_URL = 'http://192.168.0.142:8080';

export default class RequestHandler {
  constructor(clientId, clientSecret, apiEnvironment) {
    if (typeof clientId !== 'string' || typeof clientSecret !== 'string' ||
        clientId.length === 0 || clientSecret.length === 0) {
      throw new Error('Client ID or secret is undefined');
    }
    this.clientId = clientId;
    this.clientSecret = clientSecret;
    this.apiEnvironment = apiEnvironment;
  }

  sendRequest(params) {
    params.url = (this.apiEnvironment === 'QA' ? QA_API_BASE_URL : API_BASE_URL) + params.apiUrl;

    return new Promise((resolve, reject) => {
      var xhr = new XMLHttpRequest();

      xhr.open(params.method, params.url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.setRequestHeader('Client-Id', this.clientId);
      xhr.setRequestHeader('Client-Secret', this.clientSecret);
      xhr.onload = function () {
        if (this.status >= 200 && this.status < 300) {
          resolve(JSON.parse(this.responseText));
        } else {
          reject({
            status: this.status,
            statusText: this.statusText
          });
        }
      };
      xhr.onerror = function () {
        reject({
          status: this.status,
          statusText: this.statusText
        });
      };

      if (params.data) {
        xhr.send(JSON.stringify(params.data));
      } else {
        xhr.send();
      }
    });
  }
};
