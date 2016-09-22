app.controller("home", function($scope, $firebaseObject, $window) {
    angular.element(document).ready(function() {
        // header title
        $("header .mdl-layout__title").html("Home");

        // close the sidenav
        if ($(".mdl-layout__drawer.is-visible").length === 1) {
            $(".mdl-layout")[0].MaterialLayout.toggleDrawer();
        }

        // scroll to the top of the page
        $("main.mdl-layout__content").scrollTop(0);
    });

    var infoRef = firebase.database().ref().child("personalInfo");

    var infoObj = $firebaseObject(infoRef);
    infoObj.$loaded()
    .then(function(data) {
        $scope.personalInfo = data;
    })
    .catch(function(error) {
        console.log(error);
    });

    // open a link in a new tab
    $scope.openLink = function(link) {
        $window.open(link);
    };
});
