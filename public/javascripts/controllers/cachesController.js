var app = angular.module('GeocacheWebApp');

app.controller('cachesController', ['$scope','$http', function($scope, $http) {
    // create a message to display in our view
    $scope.message = 'caches Page!';
    findAll();

    function findAll() {
        $http.get('/caches')
            .success(function (data) {
                $scope.caches = data;
                console.log(data);
            })
            .error(function (data) {
                console.log('Error: ' + data);
            });
    };

    $scope.delete = function(id) {
        if (confirm("Are you sure you want to delete this Geocache?")) {
            console.log('Deleting id : ' + id);
            $http.delete('/caches/' + id)
                .success(function (data) {
                    console.log(data)
                    findAll()
                })
                .error(function (data) {
                    console.log('Error deleting geocache' + data)
                })
        }
    };


    $scope.incrementUpvotes = function(id) {
        $http.put('/caches/' + id + '/votes')
            .success(function (data) {
                console.log(data)
                findAll()
            })
            .error(function (data) {
                console.log('Error handling request' + data)
            })

    }


    $scope.updateGeocache = function(id) {
        $location.path('/caches');

        $http.put('/caches/' + id + '/votes')
            .success(function (data) {
                console.log(data)
                findAll()
            })
            .error(function (data) {
                console.log('Error handling request' + data)
            })

    }


  }



  ]
);

