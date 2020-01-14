$(document).ready(function () {

    $(".dropdown-trigger").dropdown({
        inDuration: 300,
        outDuration: 225,
        constrain_width: false,
        hover: true,
        gutter: 0,
        belowOrigin: true,
        alignment: 'right'
    });

    $('.carousel.carousel-slider').carousel({
        fullWidth: true
    });

    // function timeout() {
    //     setTimeout(function () {
    //         $('.carousel').carousel('next');
    //         timeout();
    //     }, 10000);
    // }

    // timeout();

    $("#prev").click(function () {
        $('.carousel').carousel('prev');
    });

    $("#next").click(function () {
        $('.carousel').carousel('next');
    });

    $("#psychic").click(function () {
        $('.modal').modal();
        $('#psychic-selected').modal("open");
    });

    $("#trivia").click(function () {
        $('.modal').modal();
        $('#trivia-selected').modal("open");
    });

    $("#house-party").click(function () {
        $('.modal').modal();
        $('#party-selected').modal("open");
    });

    $("#gif").click(function () {
        $('.modal').modal();
        $('#gif-selected').modal("open");
    });

    $("#train").click(function () {
        $('.modal').modal();
        $('#train-selected').modal("open");
    });

    $("#liri").click(function () {
        $('.modal').modal();
        $('#liri-selected').modal("open");
    });

    $("#bamazon").click(function () {
        $('.modal').modal();
        $('#bamazon-selected').modal("open");
    });

    $("#friend").click(function () {
        $('.modal').modal();
        $('#friend-selected').modal("open");
    });

    $("#burger").click(function () {
        $('.modal').modal();
        $('#burger-selected').modal("open");
    });

    $("#doomsday").click(function () {
        $('.modal').modal();
        $('#doomsday-selected').modal("open");
    });

    $("#scraper").click(function () {
        $('.modal').modal();
        $('#scraper-selected').modal("open");
    });
    
    $("#clicky").click(function () {
        $('.modal').modal();
        $('#clicky-selected').modal("open");
    });
    $("#google-books").click(function () {
        $('.modal').modal();
        $('#google-books-selected').modal("open");
    });
    $("#custom-corner").click(function () {
        $('.modal').modal();
        $('#custom-corner-selected').modal("open");
    });
});