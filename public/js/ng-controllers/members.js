'use strict';

angular.module('nyccouncil').
controller('MembersController',
  ['$scope',
    '$window',
  'Global',
  function ($scope, $window, Global) {
    $scope.global = Global;

    $scope.members = $window.councilmembers;


}]);
