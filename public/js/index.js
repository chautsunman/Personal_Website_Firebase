app.controller("index", function($scope, $firebaseObject) {
    // select the correct navbar element
    angular.element(document).ready(function() {
        $("#navbar li").removeClass("active");
        $("#navbar #navbar-index").addClass("active");
    });

    var infoRef = firebase.database().ref().child("personalInfo");

    $firebaseObject(infoRef).$bindTo($scope, "personalInfo");
});
