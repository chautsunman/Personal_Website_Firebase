app.controller("education", function($scope, $firebaseObject) {
    // select the correct navbar element
    angular.element(document).ready(function() {
        $("#navbar li").removeClass("active");
        $("#navbar #navbar-education").addClass("active");
    });
});
