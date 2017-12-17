var app = angular.module('GeocacheWebApp');

app.controller('cacheController', ['$scope', '$location', '$http', function($scope,$location, $http ) {

    $scope.formData = {};

    $scope.message = 'Add new cache';
    $scope.name = "Test";



    $scope.addCache = function(){
       $http.post('/caches', $scope.formData)
            .success(function(data) {
                $scope.caches = data;
                $location.path('/caches');

                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}

]);
