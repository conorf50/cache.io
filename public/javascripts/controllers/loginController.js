var app = angular.module('GeocacheWebApp');

app.controller('loginController', ['$scope', function($scope) {
    // create a message to display in our view
    $scope.message = 'Look, I\'m a Login Page!';
}
]);