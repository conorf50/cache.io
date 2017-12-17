var app = angular.module('GeocacheWebApp');

app.controller("updatecacheController", ['$scope','$http','cacheService', 'cache',function($scope, $http, cacheService, cache) {
    // create a message to display in our view

    $scope.formData = {};
    $scope.formData = cacheService;

    $scope.message = 'Update cache';




    $scope.ratings = [{ name: "Very Easy", id: 0 }, { name: "Easy", id: 1 },{ name: "Medium", id: 2 },{ name: "Hard", id: 3 }];
    $scope.formData.ratingOptions = $scope.ratings[0];

    $scope.types = [{ name: "XS", id: 0 }, { name: "S", id: 1 },{ name: "M", id: 2 },{ name: "L", id: 3 },{ name: "XL", id: 4 }];
    $scope.formData.typeOptions = $scope.types[0];



    if(cacheService.rating === "Very Easy")
        $scope.formData.ratingOptions = $scope.ratings[0];

    else if(cacheService.rating === "Easy")
        $scope.formData.ratingOptions = $scope.ratings[1];

    else if(cacheService.rating === "Medium")
        $scope.formData.ratingOptions = $scope.ratings[2];

    else
        $scope.formData.paymentOptions = $scope.options[3];


    if(cacheService.type === "XS")
        $scope.formData.typeOptions = $scope.types[0];

    else if(cacheService.type === "Easy")
        $scope.formData.typeOptions = $scope.types[1];

    else if(cacheService.type === "Medium")
        $scope.formData.typeOptions = $scope.types[2];

    else
        $scope.formData.typeOptions = $scope.types[3];

    $scope.updateCache = function(cache){

        $scope.formData.rating =$scope.formData.ratingOptions.name
        $scope.formData.type =$scope.formData.typeOptions.name



        console.log('Calling updateCache in Update Controller with Address: ' + $scope.formData);

        $http.put('/caches/' + cacheService._id, $scope.formData)
            .success(function(data) {
                $scope.caches = data;
                console.log('Updated Controller Data : ' + $scope.caches);
                $location.path('/caches');
                //console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };
}
]);