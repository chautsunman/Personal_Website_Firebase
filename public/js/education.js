app.controller("education", function($scope, $firebaseObject, $firebaseArray, $window) {
    angular.element(document).ready(function() {
        // header title
        $("header .mdl-layout__title").html("Education");
    });

    var educationRef = firebase.database().ref().child("education");

    $firebaseObject(educationRef).$bindTo($scope, "education");

    // open a link in a new tab
    $scope.openLink = function(link) {
        $window.open(link);
    };
});
