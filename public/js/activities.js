app.controller("activities", function($scope, $firebaseArray) {
    angular.element(document).ready(function() {
        // header title
        $("header .mdl-layout__title").html("Activities");
    });

    var activityRef = firebase.database().ref().child("activities");

    var activityList = $firebaseArray(activityRef);
    activityList.$loaded()
    .then(function(data) {
        $scope.activities = data;
    })
    .catch(function(error) {
        console.log(error);
    });

    $scope.activities = $firebaseArray(activityRef);
});
