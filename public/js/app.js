// Initialize Firebase
var config = {
  apiKey: "AIzaSyBusUYHBkszu_U47fZ8dE3skkERoia8M-U",
  authDomain: "personal-website-3a4ec.firebaseapp.com",
  databaseURL: "https://personal-website-3a4ec.firebaseio.com",
  storageBucket: "",
};
firebase.initializeApp(config);

var app = angular.module("personalWebsite", ["firebase"]);

app.controller("index", function($scope, $firebaseObject) {
    var infoRef = firebase.database().ref().child("personalInfo");

    $firebaseObject(infoRef).$bindTo($scope, "personalInfo");
});
