'use strict';
require('./app.css');
// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');
  console.log('asdasd')
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);

require('./view1/view1.js');
require('./view2/view2.js');

