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

    $("#highSchool>h2").click(function() {
        $("#highSchool>div").slideToggle("slow");
    });

    $("#universities>h2").click(function() {
        $("#universities>div").slideToggle("slow");
    });

    $("#onlineCourses>h2").click(function() {
        $("#onlineCourses>div").slideToggle("slow");
    });
});
