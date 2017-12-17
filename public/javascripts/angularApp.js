var app = angular.module('GeocacheWebApp', ['ngRoute','uiGmapgoogle-maps']);

app.config(function($routeProvider) {

    app.service('cacheService', function(){

// Cache service - adapted from donationweb.herokuapp.com

        var cacheService = {
            _id:"",
            name: "Test",
            note: "Note",
            latitude: 53,

            longitude: -7.89,
            photo: "",
            contents: "Stuff",

            rating: "Very Easy",
            type: "XS",
            address: '',
            marker: {},
            googlephoto:'./images/user.gif'
        };

        return cacheService;
    });



    $routeProvider

        //todo edit main controller + home.ejs to suit
        //todo change this to welcome.ejs in the future
            // route for the home page
            .when('/', {
                templateUrl : 'pages/welcome.ejs',
                controller  : " "
            })


            //todo edit about controller +  make map.ejs to suit
            // route for the login page
            .when('/login', {
                templateUrl : 'pages/login.ejs',
                controller  : " "  // don't need a controller to display page
            })

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

            // route for the logout page
            // use the login controller
            .when('/logout', {
                templateUrl : 'pages/login.ejs',
                controller  : 'loginController'
            })



            // route for the logout page
            .when('/addcache', {
                templateUrl : 'pages/addcache.ejs',
                controller  : 'cacheController'
            })

            // route for the logout page
            .when('/updatecache', {
                templateUrl : 'pages/updatecache.ejs',
                controller  : 'updatecacheController'
            })


});


  
  


