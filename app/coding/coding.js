'use strict';
 
angular.module('myApp.coding', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/coding', {
    templateUrl: 'coding/coding.html',
    controller: 'CodeCtrl'
  });
}])
 
.controller('CodeCtrl', [ '$scope', function($scope) {

}]);
