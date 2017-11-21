var app = angular.module('GeocacheWebApp');

app.controller('cacheController', ['$scope', '$location', '$http', function($scope,$location, $http ) {
    
    $scope.formData = {};

    $scope.message = 'All geocaches';
    $scope.amount = 1000;
    $scope.options = [{ name: "PayPal", id: 0 }, { name: "Direct", id: 1 }];
    $scope.formData.paymentOptions = $scope.options[0];


    $scope.addCache = function(){
        $scope.formData.paymenttype =$scope.formData.paymentOptions.name
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
