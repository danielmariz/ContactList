'use strict';

angular
  .module('contactListApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'contactListCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
