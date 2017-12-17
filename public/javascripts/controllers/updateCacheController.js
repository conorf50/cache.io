var app = angular.module('GeocacheWebApp');

app.controller('updateCacheController', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.message = 'Look, I\'m an Update Page!';
}
]);