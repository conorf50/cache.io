var app = angular.module('GeocacheWebApp', ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider


        //todo edit main controller + home.ejs to suit
        //todo change this to welcome.ejs in the future
            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.ejs',
                controller  : 'homeController'
            })


            //todo edit about controller +  make map.ejs to suit
            // route for the about page
            .when('/login', {
                templateUrl : 'pages/login.ejs',
                controller  : 'loginController'
            })
            //todo make caches controller + create caches.ejs to suit
            // route for the caches page
            .when('/caches', {
                templateUrl : 'pages/caches.ejs',
                controller  : 'cachesController'
            })
            //todo create map controller + make map.ejs to suit


             // route for the map page
            .when('/map', {
                templateUrl : 'pages/map.ejs',
                controller  : 'mapController'
            })

            //todo make logout controller + logout.ejs to suit
            // route for the logout page
            // use the login controller
            .when('/logout', {
                templateUrl : 'pages/logout.ejs',
                controller  : 'loginController'
            })

            //todo make login controller + login.ejs to suit
            // route for the logout page
            .when('/login', {
                templateUrl : 'pages/login.ejs',
                controller  : 'loginController'
            })
    
    });


  
  


