// Initialize Firebase
var config = {
  apiKey: "AIzaSyBusUYHBkszu_U47fZ8dE3skkERoia8M-U",
  authDomain: "personal-website-3a4ec.firebaseapp.com",
  databaseURL: "https://personal-website-3a4ec.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

// Create an AngularJS app
var app = angular.module("personalWebsite", ["ngRoute", "firebase"]);

// routing
app.config(function($routeProvider, $locationProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "home.html",
        controller: "home"
    })
    .when("/index", {
        templateUrl: "home.html",
        controller: "home"
    })
    .when("/home", {
        templateUrl: "home.html",
        controller: "home"
    })
    .when("/education", {
        templateUrl: "education.html",
        controller: "education"
    })
    .when("/activities", {
        templateUrl: "activities.html",
        controller: "activities"
    })
    .otherwise({
        template: "Error"
    });

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
});
