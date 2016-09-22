app.controller("experience", function($scope, $firebaseArray) {
    angular.element(document).ready(function() {
        // header title
        $("header .mdl-layout__title").html("Work Experience");

        // close the sidenav
        if ($(".mdl-layout__drawer.is-visible").length === 1) {
            $(".mdl-layout")[0].MaterialLayout.toggleDrawer();
        }

        // scroll to the top of the page
        $("main.mdl-layout__content").scrollTop(0);
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
