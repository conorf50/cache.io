var app = angular.module('GeocacheWebApp');


app.controller('homeController', ['$scope', function($scope) {
    // create a message to display in our view
      $scope.message = 'Track your caches!!';
     }
  ]);
