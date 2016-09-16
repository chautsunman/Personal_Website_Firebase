app.controller("contact", function($scope, $firebaseArray, $mdToast) {
    angular.element(document).ready(function() {
        // header title
        $("header .mdl-layout__title").html("Contact Me");
    });

    function validForm() {
        if ($scope.name && $scope.email && $scope.subject && $scope.message) {
            return true;
        }

        return false;
    };

    $scope.submit = function() {
        if (validForm()) {
            $scope.messages.$add({
                id: $scope.messages.length,
                name: $scope.name,
                email: $scope.email,
                subject: $scope.subject,
                body: $scope.message
            })
            .then(function(ref) {
                $mdToast.show(
                    $mdToast.simple()
                    .textContent('Submitted message!')
                    .position("top right")
                );
            });
        } else {
            $mdToast.show(
                $mdToast.simple()
                .textContent('Invalid form!')
                .position("top right")
            );
        }
    };

    var messageRef = firebase.database().ref().child("messages");

    $scope.messages = $firebaseArray(messageRef);
});
