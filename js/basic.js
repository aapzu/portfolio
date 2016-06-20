$(function(){
    $(".img-div").each(function() {
        $(this).css("background-image", 'url(' + $(this).data("background") + ')')
    })

    // Scrolling effect
    $(".navbar a[href^='#']").each(function(i, el) {
        $(el).click(function(e) {
            e.preventDefault()
            $("html, body").animate({
                scrollTop: $($(el).attr("href")).offset().top
            }, 500)
        })
    })

    // Auto Hiding Navbar
    $("nav.navbar").autoHidingNavbar()

    // Carousel
    $("#myCarousel .fullscreen-btn").click(function() {
        $("#myCarousel").addClass("open")
        $("body").addClass("modal-open")
        $("nav.navbar").hide()
    })
    $("#myCarousel .carousel-backdrop").click(function() {
        $("#myCarousel").removeClass("open")
        $("body").removeClass("modal-open")
        $("nav.navbar").show()
    })
})