$(function(){
    $(".img-div").each(function() {
        $(this).css("background-image", 'url(' + $(this).data("background") + ')')
    })
    $(".navbar a[href^='#']").each(function(i, el) {
        $(el).click(function(e) {
            e.preventDefault()
            $("html, body").animate({
                scrollTop: $($(el).attr("href")).offset().top
            }, 500)
        })
    })
    $("nav.navbar").autoHidingNavbar()
})