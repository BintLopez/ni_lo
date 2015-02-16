'use strict';
 
angular.module('myApp.home', ['ngRoute', 'myApp.greetings'])
 
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/home', {
    templateUrl: 'home/home.html',
    controller: 'HomeCtrl'
  });
}])
 
.controller('HomeCtrl', [ '$scope', function($scope) {
	console.log($scope.selections);
}]);

// .directive('resize', function ($window) {
//     return function (scope, element) {
//         var w = angular.element($window);
//         scope.getWindowDimensions = function () {
//             return { 'h': w.height(), 'w': w.width() };
//         };
//         scope.$watch(scope.getWindowDimensions, function (newValue, oldValue) {
//             scope.windowHeight = newValue.h;
//             scope.windowWidth = newValue.w;

//             scope.style = function () {
//                 return { 
//                     'height': (newValue.h - 100) + 'px',
//                     'width': (newValue.w - 100) + 'px' 
//                 };
//             };

//         }, true);

//         w.bind('resize', function () {
//             scope.$apply();
//         });
//     }
// });