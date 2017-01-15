$(function(){

    $(window).scroll(function(){
        if($(window).scrollTop() > 100){
            $(".navbar-brand").fadeIn(300);
        }
        else{
            $(".navbar-brand").fadeOut(300);
        }
    })

    // Scrolling effect
    $("a[href^='#'][animate]").each(function(i, el) {
        $(el).click(function(e) {
            e.preventDefault()
            $("nav.navbar").autoHidingNavbar("setDisableAutohide", true)
            $("html, body").animate({
                scrollTop: $($(el).attr("href")).offset().top
            }, 500)
            setTimeout(function() {
                $("nav.navbar").autoHidingNavbar("setDisableAutohide", false)
            }, 600)
        })
    })

    // Auto Hiding Navbar
    $("nav.navbar").autoHidingNavbar()

    // Carousel
    $("#photoCarousel .fullscreen-btn").click(function() {
        $("#photoCarousel").addClass("open")
        $("body").addClass("modal-open")
        $("nav.navbar").hide()
    })
    $("#photoCarousel .carousel-backdrop").click(function() {
        $("#photoCarousel").removeClass("open")
        $("body").removeClass("modal-open")
        $("nav.navbar").show()
        $(".carousel-item").width("initial")
    })

    $("#photoCarousel").on("slide.bs.carousel", function(e) {
        if ($("#photoCarousel").hasClass("open")) {
            var elementFrom = $(".carousel-item.active")
            var elementTo = $(e.relatedTarget)
            var originalWidth = elementFrom.width()
            elementFrom.animate({
                width: elementTo.width()
            }, 600, undefined, function() {
                elementFrom.width(originalWidth)
            })
        }
    })

    $("img[data-resolution]").one("load", function() {
        $(this).show()
        $(this).prev("img[data-resolution]").remove()
    }).each(function() {
        if(this.complete) $(this).load();
    })
})