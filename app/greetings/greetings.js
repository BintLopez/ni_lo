'use strict';
 
angular.module('myApp.greetings', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/greetings', {
    templateUrl: 'greetings/greetings.html',
    controller: 'GreetingsCtrl'
  });
}])
 
.controller('GreetingsCtrl', [ '$scope', function($scope) {
	$scope.animals = ['llama', 'ostrich', 'peacock', 'cat', 'dog'];
	$scope.colors = ['green', 'blue', 'purple', 'yellow', 'orange', 'pink'];

	$scope.selections = {};

      $scope.update = function(user) {
        $scope.selections = angular.copy(user);
        return $scope.selections;
      };

      $scope.reset = function() {
        $scope.user = angular.copy($scope.selections);
      };

      $scope.reset();
}]);