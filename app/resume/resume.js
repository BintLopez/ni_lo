'use strict';
 
angular.module('myApp.resume', ['ngRoute'])
 
.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/resume', {
    templateUrl: 'resume/resume.html',
    controller: 'resumeCtrl'
  });
}])

.factory('findExperiencesFactory', function($http) {
    var experiences = $http.get('resume/resume.json').success(function(response) {
        return response;
    });

    var factory = {};
    factory.getExperiences = function() {
        return experiences;
    };
    return factory;
})

.controller('resumeCtrl', function($scope, findExperiencesFactory) {
	findExperiencesFactory.getExperiences().then(function(data) {
        $scope.experiences = data.data;
        $scope.jobs = [];
        $scope.volunteering = []; 
        $scope.writing = [];
        $scope.coding = [];
        $scope.languages = [];
        for (var i = 0; i < $scope.experiences.length; i++) {
            if ($scope.experiences[i].type === "job") {
                $scope.jobs.push($scope.experiences[i]);
            };
            if ($scope.experiences[i].type === "volunteering") {
                $scope.volunteering.push($scope.experiences[i]);
            };
            if ($scope.experiences[i].type === "writing") {
                $scope.writing.push($scope.experiences[i]);
            }
            if ($scope.experiences[i].type === "coding") {
                $scope.coding.push($scope.experiences[i]);
            }
            if ($scope.experiences[i].type === "languages") {
                $scope.languages.push($scope.experiences[i]);
            }
        };
        $scope.expTypes = ['jobs', 'volunteering', 'writing', 'education', 'coding'];
        $scope.getByType = function(value) {
            console.log(value);
        // return value
        };
    });
});