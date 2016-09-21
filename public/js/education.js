app.controller("education", function($scope, $firebaseObject, $window, $location, $anchorScroll, $mdToast) {
    angular.element(document).ready(function() {
        // header title
        $("header .mdl-layout__title").html("Education");

        $location.hash("education");
        $anchorScroll();

        $mdToast.show(
            $mdToast.simple()
            .textContent("Swipe to navigate between tabs")
            .position("bottom right")
        );
    });

    var educationRef = firebase.database().ref().child("education");

    var educationObj = $firebaseObject(educationRef);
    educationObj.$loaded()
    .then(function(data) {
        $scope.education = data;
    })
    .catch(function(error) {
        console.log(error);
    });

    // open a link in a new tab
    $scope.openLink = function(link) {
        $window.open(link);
    };
});
