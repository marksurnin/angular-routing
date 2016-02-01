'use strict';

var angularRoutingApp = angular.module('angularRoutingApp', [
  'ngRoute',
  'angularRoutingControllers'
]);

angularRoutingApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'partials/home.html',
        controller: 'MainCtrl'
      }).
      when('/about', {
        templateUrl: 'partials/about.html',
        controller: 'AboutCtrl'
      }).
      when('/contact', {
        templateUrl: 'partials/contact.html',
        controller: 'ContactCtrl'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);