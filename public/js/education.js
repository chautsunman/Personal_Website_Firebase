app.controller("education", function($scope, $firebaseObject) {
    // select the correct navbar element
    angular.element(document).ready(function() {
        $("#navbar li").removeClass("active");
        $("#navbar #navbar-education").addClass("active");
    });

    var highSchoolRef = firebase.database().ref().child("education").child("highSchool");
    var universityRef = firebase.database().ref().child("education").child("universities");
    var onlineRef = firebase.database().ref().child("education").child("onlineCourses");

    $firebaseObject(highSchoolRef).$bindTo($scope, "highSchool");
    $firebaseObject(universityRef).$bindTo($scope, "universities");
    $firebaseObject(onlineRef).$bindTo($scope, "onlineCourses");
});
