app.controller("home", function($scope, $firebaseObject) {
    // header title
    $("header .mdl-layout__title").html("Home");

    var infoRef = firebase.database().ref().child("personalInfo");

    $firebaseObject(infoRef).$bindTo($scope, "personalInfo");
});
