$(document).ready(function () {
    $(".showMore").click(function () {
        $(".box")
            .show()
            .animate({ width: "70%" })
            .animate({ height: "300px" })
            .animate({ padding: "10px" })
            .animate({ marginLeft: "150px" })
            .animate({ opacity: 0.8 });

    });
});

// responsive slideshow


