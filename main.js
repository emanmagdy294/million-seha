$(document).ready(function () {

    $(".owl-carousel").owlCarousel({ items: 2, loop: true });

})
var owl = $('.owl-carousel');
owl.owlCarousel({
    loop: true,
    nav: true,
    margin: 5,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 3
        },
        960: {
            items: 3
        },
        1200: {
            items: 3
        }
    }
});
/*********************/
/************ */
$("#one").click(function () {
    $("#singer1").slideToggle(500),
        $("#singer2").slideUp(500),
        $("#singer3").slideUp(500),
        $("#singer4").slideUp(500)
})

$("#two").click(function () {
    $("#singer2").slideToggle(500),
        $("#singer1").slideUp(500),
        $("#singer3").slideUp(500),
        $("#singer4").slideUp(500)
})
$("#three").click(function () {
    $("#singer3").slideToggle(500),
        $("#singer1").slideUp(500),
        $("#singer2").slideUp(500),
        $("#singer4").slideUp(500)
})
$("#four").click(function () {
    $("#singer4").slideToggle(500),
        $("#singer1").slideUp(500),
        $("#singer3").slideUp(500),
        $("#singer2").slideUp(500)
});

$(document).ready(function () {
    $("#singer3").slideUp(),
        $("#singer2").slideUp(),
        $("#singer4").slideUp()
    $("#singer4").slideUp()
})