'use strict';

angular.module('contactListApp')
  .directive('contact', function () {
    return {
      restrict: 'E',
      templateUrl: '/templates/contact.html'
    };
  });
