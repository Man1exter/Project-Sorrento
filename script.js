$('.main').on("click", function () {
    $('body, html').animate({
        scrollTop: "250px"
    }, 200)
    })


    $('.meny').on("click", function () {
        $('body, html').animate({
            scrollTop: "1210px"
        }, 200)
        })



        $('.fa-chevron-circle-up').on("click", function () {
            $('body, html').animate({
                scrollTop: "0"
            }, 200)
            })

            $('.tel').on("click", function () {
                $('body, html').animate({
                    scrollTop: "0px"
                }, 200)
                })



    $('.fa-arrow-circle-right').on("click", function(){
        $('.arrowek, .fa-arrow-circle-right').toggleClass("move");
    })