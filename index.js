'use strict';

var urlSearch = require('./js/common');

module.exports = {
    /**
     * 获取url里的参数
     * @param url
     * @param encode    url的encode方式，(0：未编码，1：encodeURI,2:encodeURIComponent)
     * @returns {{}}
     */
    getParamsFromUrl: function getParamsFromUrl(url) {
        var encode = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

        switch (encode) {
            case 1:
                return urlSearch(decodeURI(url));
            case 2:
                return urlSearch(decodeURIComponent(url));
            default:
                return urlSearch(url);
        }
    }
};