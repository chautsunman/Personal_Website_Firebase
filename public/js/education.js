app.controller("education", function($scope, $firebaseObject, $firebaseArray) {
    // select the correct navbar element
    $("#navbar li").removeClass("active");
    $("#navbar #navbar-education").addClass("active");

    var highSchoolRef = firebase.database().ref().child("education").child("highSchool");
    var universityRef = firebase.database().ref().child("education").child("universities");
    var onlineRef = firebase.database().ref().child("education").child("onlineCourses");

    $firebaseObject(highSchoolRef).$bindTo($scope, "highSchool");
    $scope.universities = $firebaseArray(universityRef);
    $scope.onlineCourses = $firebaseArray(onlineRef);

    $("#highSchool>h2").click(function() {
        $("#highSchool>div").slideToggle("slow");
    });

    $("#universities>h2").click(function() {
        $("#universities>div").slideToggle("slow");
    });

    $("#onlineCourses>h2").click(function() {
        $("#onlineCourses>div").slideToggle("slow");
    });
});
