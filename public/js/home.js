app.controller("home", function($scope, $firebaseObject) {
    // select the correct navbar element
    $("#navbar li").removeClass("active");
    $("#navbar #navbar-index").addClass("active");

    var infoRef = firebase.database().ref().child("personalInfo");

    $firebaseObject(infoRef).$bindTo($scope, "personalInfo");
});
