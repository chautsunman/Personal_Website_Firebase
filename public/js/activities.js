app.controller("activities", function($scope, $firebaseArray) {
    angular.element(document).ready(function() {
        // header title
        $("header .mdl-layout__title").html("Activities");

        // close the sidenav
        if ($(".mdl-layout__drawer.is-visible").length === 1) {
            $(".mdl-layout")[0].MaterialLayout.toggleDrawer();
        }

        // scroll to the top of the page
        $("main.mdl-layout__content").scrollTop(0);
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
