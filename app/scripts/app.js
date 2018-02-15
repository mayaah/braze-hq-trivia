'use strict';

/**
 * @ngdoc overview
 * @name brazeHqTriviaApp
 * @description
 * # brazeHqTriviaApp
 *
 * Main module of the application.
 */

var underscore = angular.module('underscore', []);
underscore.factory('_', ['$window', function($window) {
  return $window._; // assumes underscore has already been loaded on the page
}]);

angular.module('brazeHqTriviaApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'firebase',
    'firebase.utils',
    'simpleLogin',
    'underscore'
  ]);

