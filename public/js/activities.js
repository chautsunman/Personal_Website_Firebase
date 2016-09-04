app.controller("activities", function($scope, $firebaseObject) {
    // select the correct navbar element
    angular.element(document).ready(function() {
        $("#navbar li").removeClass("active");
        $("#navbar #navbar-activities").addClass("active");
    });
});
