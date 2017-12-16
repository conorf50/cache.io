var app = angular.module('GeocacheWebApp');

app.controller('mapController', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.message = 'Look, I\'m a Map Page!';
}
]);