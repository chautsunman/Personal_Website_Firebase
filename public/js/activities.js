app.controller("activities", function($scope, $firebaseArray) {
    angular.element(document).ready(function() {
        // header title
        $("header .mdl-layout__title").html("Activities");
    });

    var activityRef = firebase.database().ref().child("activities");

    $scope.activities = $firebaseArray(activityRef);
});
