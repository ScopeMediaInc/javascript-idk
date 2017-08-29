(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("scopemedia", [], factory);
	else if(typeof exports === 'object')
		exports["scopemedia"] = factory();
	else
		root["scopemedia"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// import axios from 'axios';

var API_BASE_URL = 'https://api.scopemedia.com';

var RequestHandler = function () {
  function RequestHandler(clientId, clientSecret) {
    _classCallCheck(this, RequestHandler);

    if (typeof clientId !== 'string' || typeof clientSecret !== 'string' || clientId.length === 0 || clientSecret.length === 0) {
      throw new Error('Client ID or secret is undefined');
    }
    this.clientId = clientId;
    this.clientSecret = clientSecret;
  }

  _createClass(RequestHandler, [{
    key: 'sendRequest',
    value: function sendRequest(params) {
      var _this = this;

      params.url = API_BASE_URL + params.apiUrl;

      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();

        xhr.open(params.method, params.url);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.setRequestHeader('Client-Id', _this.clientId);
        xhr.setRequestHeader('Client-Secret', _this.clientSecret);
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
  }]);

  return RequestHandler;
}();

exports.default = RequestHandler;
;
module.exports = exports['default'];

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _index = __webpack_require__(2);

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  image: _index2.default
};
module.exports = exports['default'];

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _SimilarSearch = __webpack_require__(3);

var _SimilarSearch2 = _interopRequireDefault(_SimilarSearch);

var _Prediction = __webpack_require__(4);

var _Prediction2 = _interopRequireDefault(_Prediction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  SimilarSearch: _SimilarSearch2.default, Prediction: _Prediction2.default
};
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RequestHandler = __webpack_require__(0);

var _RequestHandler2 = _interopRequireDefault(_RequestHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SimilarSearch = function () {
  function SimilarSearch(clientId, clientSecret) {
    _classCallCheck(this, SimilarSearch);

    this.requestHandler = new _RequestHandler2.default(clientId, clientSecret);
  }

  _createClass(SimilarSearch, [{
    key: 'addImage',
    value: function addImage(_ref) {
      var medias = _ref.medias;

      if (!(medias instanceof Array) || medias.length === 0) {
        throw new Error('Parameter medias is invalid');
      }

      return this.requestHandler.sendRequest({
        method: 'POST',
        apiUrl: '/search/v2/medias',
        data: {
          medias: medias.map(function (element) {
            return { mediaUrl: element };
          })
        }
      });
    }
  }, {
    key: 'getAllImage',
    value: function getAllImage(_ref2) {
      var _ref2$page = _ref2.page,
          page = _ref2$page === undefined ? 0 : _ref2$page,
          _ref2$size = _ref2.size,
          size = _ref2$size === undefined ? 20 : _ref2$size;

      if (isNaN(page)) {
        throw new Error('Parameter page is invalid');
      }

      return this.requestHandler.sendRequest({
        method: 'GET',
        apiUrl: '/search/v2/medias?page=' + page + '&size=' + size
      });
    }
  }, {
    key: 'searchImage',
    value: function searchImage(_ref3) {
      var mediaId = _ref3.mediaId,
          mediaUrl = _ref3.mediaUrl,
          base64 = _ref3.base64,
          area = _ref3.area;

      var payload = {};

      if (!isNaN(mediaId)) {
        payload.mediaId = mediaId;
      } else if (typeof mediaUrl === 'string' && mediaUrl.length > 0) {
        payload.mediaUrl = mediaUrl;
      } else if (typeof base64 === 'string' && base64.length > 0) {
        payload.base64 = base64;
      } else {
        throw new Error('One of mediaId, mediaUrl or base64 is required, but none are valid');
      }

      if (area && area.hasOwnProperty('x') && area.hasOwnProperty('y') && area.hasOwnProperty('w') && area.hasOwnProperty('h') && !isNaN(area.x) && !isNaN(area.y) && !isNaN(area.w) && !isNaN(area.h)) {
        payload.area = area;
      }

      return this.requestHandler.sendRequest({
        method: 'POST',
        apiUrl: '/search/v2/similar',
        data: payload
      });
    }
  }]);

  return SimilarSearch;
}();

exports.default = SimilarSearch;
;
module.exports = exports['default'];

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _RequestHandler = __webpack_require__(0);

var _RequestHandler2 = _interopRequireDefault(_RequestHandler);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Prediction = function () {
  function Prediction(clientId, clientSecret) {
    _classCallCheck(this, Prediction);

    this.requestHandler = new _RequestHandler2.default(clientId, clientSecret);
  }

  _createClass(Prediction, [{
    key: 'getModels',
    value: function getModels() {
      return this.requestHandler.sendRequest({
        method: 'GET',
        apiUrl: '/tagging/v2/models'
      });
    }
  }, {
    key: 'predictImage',
    value: function predictImage(_ref) {
      var modelId = _ref.modelId,
          mediaUrl = _ref.mediaUrl,
          base64 = _ref.base64,
          area = _ref.area;

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

      if (area && area.hasOwnProperty('x') && area.hasOwnProperty('y') && area.hasOwnProperty('w') && area.hasOwnProperty('h') && !isNaN(area.x) && !isNaN(area.y) && !isNaN(area.w) && !isNaN(area.h)) {
        payload.area = area;
      }

      return this.requestHandler.sendRequest({
        method: 'POST',
        apiUrl: '/tagging/v2/prediction',
        data: payload
      });
    }
  }]);

  return Prediction;
}();

exports.default = Prediction;
;
module.exports = exports['default'];

/***/ })
/******/ ]);
});
//# sourceMappingURL=scopemedia.js.map