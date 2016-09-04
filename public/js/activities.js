app.controller("activities", function($scope, $firebaseObject) {
    // select the correct navbar element
    angular.element(document).ready(function() {
        $("#navbar li").removeClass("active");
        $("#navbar #navbar-activities").addClass("active");
    });

    var activityRef = firebase.database().ref().child("activities");

    $firebaseObject(activityRef).$bindTo($scope, "activities");
});
