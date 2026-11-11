
$(document).ready(function () {

    // Mobile navigation menu
    $("#menuBtn").click(function () {
        $("#navMenu").toggleClass("show");
    });

    // Close menu after clicking a navigation link
    $("#navMenu a").click(function () {
        $("#navMenu").removeClass("show");
    });

    // Display current year in footer
    $("#year").text(new Date().getFullYear());

});

// Check whether the profile photo is available
document.querySelectorAll("img").forEach(function (image) {

    image.addEventListener("error", function () {
        this.alt = "Profile photo not found. Check photo.jpg location.";
        this.style.backgroundColor = "#e6f3ff";
    });

});
