/*jslint devel: true */

var main = function () {
    var menu = $('#menu')

    $(document).scroll(function () {

        if ($(window).scrollTop() >= $(window).height() - (menu.height() * 8.5)) {
            menu.removeClass('menu_bottom').addClass('menu_top')
            $('#topName').fadeIn(250);
            $('#blocker').fadeIn(250);
        } else {
            menu.removeClass('menu_top').addClass('menu_bottom')
            $('#topName').fadeOut(250);
            $('#blocker').fadeIn(250);
        }


        if ($(window).scrollTop() >= $(window).height() / 5) {
            $('.icon-scroll').fadeOut(850);
        } else {
            $('.icon-scroll').fadeIn(650);
        };
    })






    //set the body to invisible
    $('body').css({
        "opacity": 0
    });

    //if the web address has a hash at the end (i.e. it's linking to the middle of another page)
    if (window.location.hash) {

        //put it to the top of the other page then animate down
        $('html, body').scrollTop(0);
        $('html, body').animate({
            scrollTop: $(window.location.hash).offset().top - 100
        }, 50, function () {

            console.log("JHjlkjl");
        });

        //make sure the animation is done, then fade everything in
        $('html, body').promise().done(
            function () {

                $('html, body').animate({
                    opacity: 1
                }, 1200, function () {});

            });

        //if all else fails, make the page visible
    } else {
        $('body').css("opacity", "1");
    }





    //This section is for the phone menu. It has an extra step to get rid of the menu overlay.
    //Look, I'm not proud of how I put this together. It's ugly and inefficient.
    //Sometimes, ugly and innefficient is the right way to do something
    //Perfection is a myth.
    //We're all just trying our best.
    //Ugh.

    //MENU LINKS INDEX
    //Menu link to hello section
    $("#hello1").click(function () {

        //check if we're in mobile mode and, if we are, hide the menu
        if ($("#menu_checkbox").is(':checked')) {
            $(".phoneMenuCont").hide();
            $('.phoneMenuCont').animate({
                opacity: 0
            }, 10, function () {});
            $("#menu_checkbox").prop("checked", false);
        }

        $('html, body').animate({
            scrollTop: 0
        }, 200);
    })

    //Menu link to brand copy section
    $("#brand1").click(function () {

        //check if we're in mobile mode and, if we are, hide the menu
        if ($("#menu_checkbox").is(':checked')) {
            $(".phoneMenuCont").hide();
            $('.phoneMenuCont').animate({
                opacity: 0
            }, 10, function () {});
            $("#menu_checkbox").prop("checked", false);
        }


        $('html, body').animate({
            scrollTop: $("#sub1").offset().top - 100
        }, 200);

    });

    //Menu link to digital copy section
    $("#digital1").click(function () {

        //check if we're in mobile mode and, if we are, hide the menu
        if ($("#menu_checkbox").is(':checked')) {
            $(".phoneMenuCont").hide();
            $('.phoneMenuCont').animate({
                opacity: 0
            }, 10, function () {});
            $("#menu_checkbox").prop("checked", false);
        }

        $('html, body').animate({
            scrollTop: $("#sub2").offset().top - 100
        }, 200);
    });

    //Menu link to video section
    $("#video1").click(function () {

        //check if we're in mobile mode and, if we are, hide the menu
        if ($("#menu_checkbox").is(':checked')) {
            $(".phoneMenuCont").hide();
            $('.phoneMenuCont').animate({
                opacity: 0
            }, 10, function () {});
            $("#menu_checkbox").prop("checked", false);
        }

        $('html, body').animate({
            scrollTop: $("#sub3").offset().top - 100
        }, 200);
    });

    //Menu link to etc section
    $("#etc1").click(function () {

        //check if we're in mobile mode and, if we are, hide the menu
        if ($("#menu_checkbox").is(':checked')) {
            $(".phoneMenuCont").hide();
            $('.phoneMenuCont').animate({
                opacity: 0
            }, 10, function () {});
            $("#menu_checkbox").prop("checked", false);
        }

        $('html, body').animate({
            scrollTop: $("#sub4").offset().top - 100
        }, 200);
    });

    //Menu link to about section
    $("#about1").click(function () {

        //check if we're in mobile mode and, if we are, hide the menu
        if ($("#menu_checkbox").is(':checked')) {
            $(".phoneMenuCont").hide();
            $('.phoneMenuCont').animate({
                opacity: 0
            }, 10, function () {});
            $("#menu_checkbox").prop("checked", false);
        }

        $('html, body').animate({
            scrollTop: $("#sub5").offset().top - 100
        }, 200);
    });

};




//The below bit is for the main, non-phone menu.
//It is what it is.


$("#topName").click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 200);
})

//Menu link to hello section
$("#hello").click(function () {
    $('html, body').animate({
        scrollTop: 0
    }, 200);
})

//Menu link to brand copy section
$("#brand").click(function () {


    $('html, body').animate({
        scrollTop: $("#sub1").offset().top - 100
    }, 200);

});

//Menu link to digital copy section
$("#digital").click(function () {

    $('html, body').animate({
        scrollTop: $("#sub2").offset().top - 100
    }, 200);
});

//Menu link to video section
$("#video").click(function () {

    $('html, body').animate({
        scrollTop: $("#sub3").offset().top - 100
    }, 200);
});

//Menu link to etc section
$("#etc").click(function () {

    $('html, body').animate({
        scrollTop: $("#sub4").offset().top - 100
    }, 200);
});

//Menu link to about section
$("#about").click(function () {

    $('html, body').animate({
        scrollTop: $("#sub5").offset().top - 100
    }, 200);
});




//If we're at phone sizings, see if the hamburger menu has been tapped
//If it has, make the menu exist then fade it in
$("#menu_checkbox").click(function () {

    if ($("#menu_checkbox").is(':checked')) {
        console.log("check"); // checked

        $(".phoneMenuCont").show();
        $('.phoneMenuCont').animate({
            opacity: 1
        }, 200, function () {});



    } else {
        console.log("uncheck"); // unchecked


        console.log("check"); // checked


        $('.phoneMenuCont').animate({
            opacity: 0
        }, 300, function () {

            $(".phoneMenuCont").hide();
        });


    }

});


//email stuff
//This array contains all of the email headers. Want more email headers? Write them.
var subjects = ['What up?', 'I\'m looking for advice about this weird rash', 'Is your surname not spelled with a c??', 'Hey bby g', 'I saw that thing you did with the thing - dope!', 'I appreciate that you went ahead and wrote some subject lines for emails for me, probably in the hopes to surprise me, but I\'m not your puppet', 'Need some Boush in my life', 'Do you have a favourite colour?', 'I found this picture. You have it', 'I want to talk to you about videogames', 'Slippin\' into your inbox like', 'I saw you the other day. We were across the street, heading in opposite directions. I thought to call out to you, to make things how they were, but you seemed busy... I know you said you\'d always have time for me, you\'d always care, and I really want to have some of that time again. How have you been?', 'You actually ginger or you just like the nicknames?', 'ARE YOU MAN ENOUGH TO READ THIS EMAIL?!?', 'Hey kid, wanna buy some words?', "Hi Ian, I'm dad", "Tell me about your shame tattoo", "Have you ever imagined what it would be like to have, like, a snake tongue?", "*Heavy breathing*", "Can we flap our mouth holes at each other for a bit?", "Who would your dad say would win in a fight? The Spice Girls, Aerosmith, or Boy George?"];

$("#email").click(function () {

    var subject = subjects[Math.floor(Math.random() * subjects.length)]

    window.location.href = "mailto:ian@ianbousher.com?subject=" + subject + "&body=";
})


$(document).ready(main);
