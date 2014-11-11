'use strict';

angular.module('cornpopApp.controllers')
  .controller('LoginController',
    function($scope, $location, UserService) {
      $scope.signup = {};
      $scope.login = {};

      $scope.submitSignup = function() {
        UserService.signup($scope.signup).then(
          function(user) {
            $location.path("/");
          },
          function(reason) {
            $scope.signup.errors = reason;
          });
      };

      $scope.submitLogin = function() {
        UserService.login($scope.login).then(
          function(user) {
            $location.path("/");
          },
          function(reason) {
            $scope.login.errors = reason;
          });
      };
    });