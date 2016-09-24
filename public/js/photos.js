app.controller("photos", function($scope, $mdToast) {
    angular.element(document).ready(function() {
        // header title
        $("header .mdl-layout__title").html("Photos");

        // close the sidenav
        if ($(".mdl-layout__drawer.is-visible").length === 1) {
            $(".mdl-layout")[0].MaterialLayout.toggleDrawer();
        }

        // scroll to the top of the page
        $("main.mdl-layout__content").scrollTop(0);

        $mdToast.show(
            $mdToast.simple()
            .textContent("Click on any photo to view a larger version")
            .position("top right")
        );

        $('#photos md-grid-list md-grid-tile div').click(function() {
            var image = $(this);
            var imageUrl = image.css("background-image").substring(5, image.css("background-image").length-2);

            $("#photoModal img").attr("src", imageUrl);

            $("#photoModal").modal();
        });
    });
});
