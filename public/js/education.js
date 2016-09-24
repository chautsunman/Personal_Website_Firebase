app.controller("education", function($scope, $firebaseObject, $window, $mdToast) {
    angular.element(document).ready(function() {
        // header title
        $("header .mdl-layout__title").html("Education");

        // close the sidenav
        if ($(".mdl-layout__drawer.is-visible").length === 1) {
            $(".mdl-layout")[0].MaterialLayout.toggleDrawer();
        }

        // scroll to the top of the page
        $("main.mdl-layout__content").scrollTop(0);

        $mdToast.show(
            $mdToast.simple()
            .textContent("Swipe to navigate between tabs")
            .position("top right")
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
