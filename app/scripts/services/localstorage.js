'use strict';

angular.module('contactListApp')
  .factory('Localstorage', function Localstorage() {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return {
      get: function () {
        return JSON.parse(localStorage.getItem('contact') || '[]');
      },

      put: function (contacts) {
        localStorage.setItem('contact', JSON.stringify(contacts));
      }
    };
  });
