app.controller("home", function($scope, $firebaseObject, $window) {
    angular.element(document).ready(function() {
        // header title
        $("header .mdl-layout__title").html("Home");
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
