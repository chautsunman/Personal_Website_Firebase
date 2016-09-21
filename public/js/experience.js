app.controller("experience", function($scope, $firebaseArray, $location, $anchorScroll) {
    angular.element(document).ready(function() {
        // header title
        $("header .mdl-layout__title").html("Work Experience");

        $location.hash("experience");
        $anchorScroll();
    });

    var experienceRef = firebase.database().ref().child("experience");

    var experienceList = $firebaseArray(experienceRef);
    experienceList.$loaded()
    .then(function(data) {
        $scope.experience = data;
    })
    .catch(function(error) {
        console.log(error);
    });

    $scope.experience = $firebaseArray(experienceRef);
});
