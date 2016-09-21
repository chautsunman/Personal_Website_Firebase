app.controller("home", function($scope, $firebaseObject, $window, $location, $anchorScroll) {
    angular.element(document).ready(function() {
        // header title
        $("header .mdl-layout__title").html("Home");

        $location.hash("home");
        $anchorScroll();
    });

    var infoRef = firebase.database().ref().child("personalInfo");

    var infoObj = $firebaseObject(infoRef);
    infoObj.$loaded()
    .then(function(data) {
        $scope.personalInfo = data;
    })
    .catch(function(error) {
        console.log(error);
    });

    // open a link in a new tab
    $scope.openLink = function(link) {
        $window.open(link);
    };
});
