app.controller("home", function($scope, $firebaseObject, $window) {
    // header title
    $("header .mdl-layout__title").html("Home");

    var infoRef = firebase.database().ref().child("personalInfo");

    $firebaseObject(infoRef).$bindTo($scope, "personalInfo");

    // open a link in a new tab
    $scope.openLink = function(link) {
        $window.open(link);
    };
});
