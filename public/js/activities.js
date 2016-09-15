app.controller("activities", function($scope, $firebaseObject) {
    // header title
    $("header .mdl-layout__title").html("Activities");

    var activityRef = firebase.database().ref().child("activities");

    $firebaseObject(activityRef).$bindTo($scope, "activities");
});
