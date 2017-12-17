var app = angular.module('GeocacheWebApp');

app.controller('cacheController', ['$scope', '$location', '$http', function($scope,$location, $http ) {

    /*
    A geocache consists of the following:
      cache.name
    cache.note
    cache.latitude
    cache.longitude
    cache.photo
    cache.rating
    cache.type
    cache.contents
     */




    $scope.formData = {};

    $scope.message = 'Add a new geocache';
    $scope.name = "Cache";
    $scope.note = "Note";
    $scope.latitude = 56;
    $scope.longitude = -7.567;
    $scope.photo = "image.jpg";
    $scope.ratings = [{ name: "Very Easy", id: 0 }, { name: "Easy", id: 1 }, { name: "Medium", id: 2 }, { name: "Dificult", id: 3 }];
    $scope.types = [{ name: "Tiny", id: 0 }, { name: "Small", id: 1 }, { name: "Medium", id: 2 }, { name: "Large", id: 3 }];
    $scope.formData.geocacheType = $scope.type[0];
    $scope.formData.geocacheRating = $scope.rating[0];
    $scope.contents = "Random Stuff";





    $scope.addCache = function(){
        $scope.formData.type =$scope.formData.types.name
        $scope.formData.rating =$scope.formData.ratings.name

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
