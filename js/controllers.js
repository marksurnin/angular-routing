'use strict';

var angularRoutingControllers = angular.module('angularRoutingControllers', []);

angularRoutingControllers.controller('MainCtrl', ['$scope',
  function($scope) {
    $scope.message = 'Hola, mundo!';
}]);

angularRoutingControllers.controller('AboutCtrl', ['$scope',
  function($scope) {
    $scope.message = 'About us!';
}]);

angularRoutingControllers.controller('ContactCtrl', ['$scope',
  function($scope) {
    $scope.message = 'Contact us!';
}]);
