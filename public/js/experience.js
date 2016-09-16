app.controller("experience", function($scope, $firebaseArray) {
    angular.element(document).ready(function() {
        // header title
        $("header .mdl-layout__title").html("Work Experience");
    });

    var experienceRef = firebase.database().ref().child("experience");

    $scope.experience = $firebaseArray(experienceRef);
});
