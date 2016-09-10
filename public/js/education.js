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

    // initialize each tab
    $(".nav a").click(function (e) {
      e.preventDefault();
      $(this).tab("show");
    });
});
