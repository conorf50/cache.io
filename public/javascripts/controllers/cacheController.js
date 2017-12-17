var app = angular.module('GeocacheWebApp');

app.controller('cacheController', ['$scope', '$location', '$http','$cacheService', function($scope,$location, $http, $cacheService ) {

    $scope.formData = {};

    $scope.message = 'Add new cache';
    $scope.name = "Test";
    $scope.note = "Note";
    $scope.latitude = 56;
    $scope.longitude = -7.567;
    $scope.photo = "image.jpg"; //todo when photos are implemented, make this point to a placeholder image
    $scope.contents = "Random Stuff";
    $scope.ratings = [{ name: "Very Easy", id: 0 }, { name: "Easy", id: 1 },{ name: "Medium", id: 2 },{ name: "Hard", id: 3 }];
    $scope.formData.ratingOptions = $scope.ratings[0];

    $scope.types = [{ name: "XS", id: 0 }, { name: "S", id: 1 },{ name: "M", id: 2 },{ name: "L", id: 3 },{ name: "XL", id: 4 }];
    $scope.formData.typeOptions = $scope.types[0];





    $scope.addCache = function(){
        $scope.formData.rating =$scope.formData.ratingOptions.name
        $scope.formData.type =$scope.formData.typeOptions.name


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
