'use strict';

angular.module('myApp.view2', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view2', {
    template: require('./view2.html'),
    controller: 'View2Ctrl'
  });
}])

.controller('View2Ctrl', [ '$http','$scope',function($http,$scope) {
    $http.get("/product/categories")
    .then(function(response) {
        $scope.categories = response.data;
    });
}]);
