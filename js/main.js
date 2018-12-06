$(document).ready(function () {
    // Set the interval to be 5 seconds
    var imgWidth = $(".imgCar").width();
    var t = setInterval(function () {
        $("#carousel ul").animate({ marginLeft: -imgWidth }, imgWidth, function () {
            $(this).find("li:last").after($(this).find("li:first"));
            $(this).css({ marginLeft: 0 });
        })
    }, 10000);