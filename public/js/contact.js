app.controller("contact", function($scope, $firebaseArray) {
    angular.element(document).ready(function() {
        // header title
        $("header .mdl-layout__title").html("Contact Me");
    });

    $scope.submit = function() {

    };

    var messageRef = firebase.database().ref().child("messages");

    $scope.messages = $firebaseArray(messageRef);
});
