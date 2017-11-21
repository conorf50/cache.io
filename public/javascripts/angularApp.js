var app = angular.module('GeocacheWebApp', ['ngRoute']);

app.config(function($routeProvider) {
        $routeProvider


        //todo edit main controller + home.ejs to suit
            // route for the home page
            .when('/', {
                templateUrl : 'pages/home.ejs',
                controller  : 'mainController'
            })


            //todo edit about controller +  make about.ejs to suit
            // route for the about page
            .when('/login', {
                templateUrl : 'pages/about.ejs',
                controller  : 'aboutController'
            })
            //todo make caches controller + create caches.ejs to suit
            // route for the caches page
            .when('/caches', {
                templateUrl : 'pages/caches.ejs',
                controller  : 'cacheController'
            })
            //todo create map controller + make map.ejs to suit


             // route for the map page
            .when('/map', {
                templateUrl : 'pages/map.ejs',
                controller  : 'mapController'
            })

            //todo make logout controller + logout.ejs to suit
            // route for the logout page
            .when('/logout', {
                templateUrl : 'pages/logout.ejs',
                controller  : 'logoutController'
            })

            //todo make login controller + login.ejs to suit
            // route for the logout page
            .when('/login', {
                templateUrl : 'pages/login.ejs',
                controller  : 'loginController'
            })



             // route for the settings page
            .when('/settings', {
                templateUrl : 'pages/settings.ejs',
                controller  : 'settingsController'
            });
    });


  
  


